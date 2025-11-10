'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [messageLength, setMessageLength] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>();

  const messageValue = watch('message');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xwpaedbl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitStatus('success');
      reset();
      setMessageLength(0);

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');

      // Auto-hide error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative">
      {/* Name */}
      <div className="group">
        <label htmlFor="name" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2 transition-colors group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400">
          Name *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className={`w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-400 dark:text-dark-text-tertiary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <input
            {...register('name')}
            type="text"
            id="name"
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 transition-all duration-300 ${
              errors.name
                ? 'border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/10'
                : focusedField === 'name'
                  ? 'border-primary-500 dark:border-primary-400 bg-primary-50/50 dark:bg-primary-900/10 shadow-lg shadow-primary-500/10 dark:shadow-primary-400/10'
                  : 'border-secondary-200 dark:border-dark-border bg-white dark:bg-dark-bg-secondary hover:border-secondary-300 dark:hover:border-dark-border/80'
            } text-secondary-900 dark:text-dark-text-primary placeholder:text-secondary-400 dark:placeholder:text-dark-text-tertiary focus:outline-none`}
            placeholder="Your full name"
          />
        </div>
        {errors.name && (
          <p className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center gap-1 animate-in">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="group">
        <label htmlFor="email" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2 transition-colors group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400">
          Email *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className={`w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-400 dark:text-dark-text-tertiary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input
            {...register('email')}
            type="email"
            id="email"
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 transition-all duration-300 ${
              errors.email
                ? 'border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/10'
                : focusedField === 'email'
                  ? 'border-primary-500 dark:border-primary-400 bg-primary-50/50 dark:bg-primary-900/10 shadow-lg shadow-primary-500/10 dark:shadow-primary-400/10'
                  : 'border-secondary-200 dark:border-dark-border bg-white dark:bg-dark-bg-secondary hover:border-secondary-300 dark:hover:border-dark-border/80'
            } text-secondary-900 dark:text-dark-text-primary placeholder:text-secondary-400 dark:placeholder:text-dark-text-tertiary focus:outline-none`}
            placeholder="your.email@example.com"
          />
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center gap-1 animate-in">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone and Company (Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="group">
          <label htmlFor="phone" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2 transition-colors group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400">
            Phone (Optional)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className={`w-5 h-5 transition-colors ${focusedField === 'phone' ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-400 dark:text-dark-text-tertiary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 transition-all duration-300 ${
                focusedField === 'phone'
                  ? 'border-primary-500 dark:border-primary-400 bg-primary-50/50 dark:bg-primary-900/10 shadow-lg shadow-primary-500/10 dark:shadow-primary-400/10'
                  : 'border-secondary-200 dark:border-dark-border bg-white dark:bg-dark-bg-secondary hover:border-secondary-300 dark:hover:border-dark-border/80'
              } text-secondary-900 dark:text-dark-text-primary placeholder:text-secondary-400 dark:placeholder:text-dark-text-tertiary focus:outline-none`}
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div className="group">
          <label htmlFor="company" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2 transition-colors group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400">
            Company (Optional)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className={`w-5 h-5 transition-colors ${focusedField === 'company' ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-400 dark:text-dark-text-tertiary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <input
              {...register('company')}
              type="text"
              id="company"
              onFocus={() => setFocusedField('company')}
              onBlur={() => setFocusedField(null)}
              className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 transition-all duration-300 ${
                focusedField === 'company'
                  ? 'border-primary-500 dark:border-primary-400 bg-primary-50/50 dark:bg-primary-900/10 shadow-lg shadow-primary-500/10 dark:shadow-primary-400/10'
                  : 'border-secondary-200 dark:border-dark-border bg-white dark:bg-dark-bg-secondary hover:border-secondary-300 dark:hover:border-dark-border/80'
              } text-secondary-900 dark:text-dark-text-primary placeholder:text-secondary-400 dark:placeholder:text-dark-text-tertiary focus:outline-none`}
              placeholder="Your company name"
            />
          </div>
        </div>
      </div>

      {/* Project Type */}
      <div className="group">
        <label htmlFor="projectType" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2 transition-colors group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400">
          Project Type *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className={`w-5 h-5 transition-colors ${focusedField === 'projectType' ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-400 dark:text-dark-text-tertiary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <select
            {...register('projectType')}
            id="projectType"
            onFocus={() => setFocusedField('projectType')}
            onBlur={() => setFocusedField(null)}
            className={`w-full pl-12 pr-10 py-3.5 rounded-xl border-2 transition-all duration-300 appearance-none cursor-pointer ${
              errors.projectType
                ? 'border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/10'
                : focusedField === 'projectType'
                  ? 'border-primary-500 dark:border-primary-400 bg-primary-50/50 dark:bg-primary-900/10 shadow-lg shadow-primary-500/10 dark:shadow-primary-400/10'
                  : 'border-secondary-200 dark:border-dark-border bg-white dark:bg-dark-bg-secondary hover:border-secondary-300 dark:hover:border-dark-border/80'
            } text-secondary-900 dark:text-dark-text-primary focus:outline-none`}
          >
            <option value="">Select a project type</option>
            <option value="new-website">New Website</option>
            <option value="website-redesign">Website Redesign</option>
            <option value="ecommerce-store">eCommerce Store</option>
            <option value="web-application">Web Application</option>
            <option value="other">Other</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-secondary-400 dark:text-dark-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {errors.projectType && (
          <p className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center gap-1 animate-in">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.projectType.message}
          </p>
        )}
      </div>

      {/* Budget and Timeline (Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="group">
          <label htmlFor="budget" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2 transition-colors group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400">
            Budget Range *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className={`w-5 h-5 transition-colors ${focusedField === 'budget' ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-400 dark:text-dark-text-tertiary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <select
              {...register('budget')}
              id="budget"
              onFocus={() => setFocusedField('budget')}
              onBlur={() => setFocusedField(null)}
              className={`w-full pl-12 pr-10 py-3.5 rounded-xl border-2 transition-all duration-300 appearance-none cursor-pointer ${
                errors.budget
                  ? 'border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/10'
                  : focusedField === 'budget'
                    ? 'border-primary-500 dark:border-primary-400 bg-primary-50/50 dark:bg-primary-900/10 shadow-lg shadow-primary-500/10 dark:shadow-primary-400/10'
                    : 'border-secondary-200 dark:border-dark-border bg-white dark:bg-dark-bg-secondary hover:border-secondary-300 dark:hover:border-dark-border/80'
              } text-secondary-900 dark:text-dark-text-primary focus:outline-none`}
            >
              <option value="">Select budget range</option>
              <option value="20k-50k">₹20,000 - ₹50,000</option>
              <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
              <option value="1lakh-2lakh">₹1,00,000 - ₹2,00,000</option>
              <option value="2lakh-5lakh">₹2,00,000 - ₹5,00,000</option>
              <option value="5lakh-plus">₹5,00,000+</option>
              <option value="not-sure">Not Sure Yet</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-secondary-400 dark:text-dark-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.budget && (
            <p className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center gap-1 animate-in">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.budget.message}
            </p>
          )}
        </div>

        <div className="group">
          <label htmlFor="timeline" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2 transition-colors group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400">
            Timeline *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className={`w-5 h-5 transition-colors ${focusedField === 'timeline' ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-400 dark:text-dark-text-tertiary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <select
              {...register('timeline')}
              id="timeline"
              onFocus={() => setFocusedField('timeline')}
              onBlur={() => setFocusedField(null)}
              className={`w-full pl-12 pr-10 py-3.5 rounded-xl border-2 transition-all duration-300 appearance-none cursor-pointer ${
                errors.timeline
                  ? 'border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/10'
                  : focusedField === 'timeline'
                    ? 'border-primary-500 dark:border-primary-400 bg-primary-50/50 dark:bg-primary-900/10 shadow-lg shadow-primary-500/10 dark:shadow-primary-400/10'
                    : 'border-secondary-200 dark:border-dark-border bg-white dark:bg-dark-bg-secondary hover:border-secondary-300 dark:hover:border-dark-border/80'
              } text-secondary-900 dark:text-dark-text-primary focus:outline-none`}
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP (1-2 weeks)</option>
              <option value="1-2-months">1-2 months</option>
              <option value="2-3-months">2-3 months</option>
              <option value="3-plus-months">3+ months</option>
              <option value="exploring">Just Exploring</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-secondary-400 dark:text-dark-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.timeline && (
            <p className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center gap-1 animate-in">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.timeline.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="group">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="message" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary transition-colors group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400">
            Message *
          </label>
          <span className={`text-xs transition-colors ${
            messageValue && messageValue.length >= 20
              ? 'text-green-600 dark:text-green-400'
              : messageValue && messageValue.length > 0
                ? 'text-secondary-400 dark:text-dark-text-tertiary'
                : 'text-secondary-400 dark:text-dark-text-tertiary'
          }`}>
            {messageValue?.length || 0} / 20 min
          </span>
        </div>
        <div className="relative">
          <div className="absolute top-4 left-4 pointer-events-none">
            <svg className={`w-5 h-5 transition-colors ${focusedField === 'message' ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-400 dark:text-dark-text-tertiary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <textarea
            {...register('message', {
              onChange: (e) => setMessageLength(e.target.value.length),
            })}
            id="message"
            rows={6}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 transition-all duration-300 ${
              errors.message
                ? 'border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/10'
                : focusedField === 'message'
                  ? 'border-primary-500 dark:border-primary-400 bg-primary-50/50 dark:bg-primary-900/10 shadow-lg shadow-primary-500/10 dark:shadow-primary-400/10'
                  : 'border-secondary-200 dark:border-dark-border bg-white dark:bg-dark-bg-secondary hover:border-secondary-300 dark:hover:border-dark-border/80'
            } text-secondary-900 dark:text-dark-text-primary placeholder:text-secondary-400 dark:placeholder:text-dark-text-tertiary focus:outline-none resize-none`}
            placeholder="Tell us about your project goals, challenges, and requirements..."
          />
        </div>
        {errors.message && (
          <p className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center gap-1 animate-in">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full sm:w-auto px-12 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary-500/30 dark:hover:shadow-primary-400/20 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        <p className="text-sm text-secondary-500 dark:text-dark-text-tertiary text-center sm:text-left">
          We typically respond within 24 hours
        </p>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-300 dark:border-green-700 rounded-xl p-4 animate-in-slow">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">Message sent successfully!</h4>
              <p className="text-sm text-green-800 dark:text-green-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border-2 border-red-300 dark:border-red-700 rounded-xl p-4 animate-in-slow">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">Oops! Something went wrong</h4>
              <p className="text-sm text-red-800 dark:text-red-400">
                Please try again or email us directly at{' '}
                <a href="mailto:hello@bob2build.com" className="underline font-medium hover:text-red-900 dark:hover:text-red-300">
                  hello@bob2build.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
