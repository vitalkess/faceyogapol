import React, { useState } from 'react';
import { X, Clock, Calendar, Loader2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { Button, Countdown } from './Shared';
import { PRICE } from '../../constants';

export const PaymentModal: React.FC = () => {
    const { isOpen, closeModal } = useModal();
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false);

    // Date logic: Tomorrow
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1);
    const formattedDate = startDate.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' });

    const handleClose = () => {
        closeModal();
        setIsSubmitting(false);
        setIsRedirecting(false);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting || isRedirecting) return;

        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // 1. Prepare Stripe URL
        const baseStripeUrl = "https://buy.stripe.com/fZu4gBbZ28HQ8iFgGg1RC04?locale=pl";
        const redirectUrl = email
            ? `${baseStripeUrl}&prefilled_email=${encodeURIComponent(email)}`
            : baseStripeUrl;

        try {
            // 2. Call our own Vercel API Route
            // This is secure and runs on the server side
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone
                })
            });

            if (!response.ok) {
                // We just log the error, we don't stop the user
                console.warn('Email sending failed, but proceeding to payment');
            }

        } catch (error) {
            // 3. FAIL-SAFE:
            // If email fails (API error, Server limit), we LOG it but DO NOT STOP.
            // We prioritize getting the user to the Payment Page.
            console.warn("Vercel API error:", error);
        } finally {
            // 4. ALWAYS Redirect to Stripe
            // The user never sees an error, just a smooth transition to payment.
            setIsRedirecting(true);
            window.location.href = redirectUrl;
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            ></div>
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden transform transition-all scale-100">

                {/* Header with Timer */}
                <div className="bg-gradient-to-r from-primary-50 to-white p-4 border-b border-primary-100 flex justify-between items-center relative">
                    <div className="flex items-center gap-2 text-primary-700 font-bold text-sm">
                        <Clock className="w-4 h-4 animate-pulse" />
                        <span>Koniec promocji za:</span>
                    </div>
                    {/* mr-8 ensures timer doesn't overlap with close button */}
                    <div className="scale-90 origin-right mr-8">
                        <Countdown condensed />
                    </div>
                    <button
                        onClick={handleClose}
                        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 md:p-8">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Zarezerwuj miejsce</h3>
                        <p className="text-gray-500 text-sm">Wypełnij formularz, aby uzyskać dostęp</p>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-700 mb-8 bg-primary-50 py-3 px-4 rounded-xl border border-primary-100">
                        <Calendar className="w-5 h-5 text-primary-500" />
                        <span>Start maratonu: <span className="font-bold text-gray-900">{formattedDate}</span></span>
                    </div>

                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 ml-1">Imię</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Anna"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 ml-1">Telefon</label>
                            <input
                                name="phone"
                                type="tel"
                                placeholder="+48 XXX XXX XXX"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 ml-1">Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="pt-4">
                            <Button
                                fullWidth
                                size="lg"
                                pulse
                                className="justify-center shadow-primary-500/30"
                                onClick={(e) => { e.stopPropagation(); }}
                                type="submit"
                                disabled={isSubmitting || isRedirecting}
                            >
                                {(isSubmitting || isRedirecting) ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                        {isRedirecting ? "Przekierowanie..." : "Przetwarzanie..."}
                                    </>
                                ) : (
                                    `Zapłać ${PRICE.current} ${PRICE.currency}`
                                )}
                            </Button>

                            <div className="flex justify-center items-center gap-6 mt-6 opacity-70">
                                {/* Visa */}
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 w-auto object-contain" alt="Visa" />

                                {/* Mastercard */}
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-8 w-auto object-contain" alt="Mastercard" />

                                {/* Blik */}
                                <img src="https://vectorseek.com/wp-content/uploads/2023/09/Blik-Logo-Vector.svg-.png" className="h-8 w-auto object-contain" alt="Blik" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};