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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual API call)
      console.log('Form data:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2">
          Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name ? 'border-red-500 dark:border-red-400' : 'border-secondary-300 dark:border-dark-border'
          } bg-white dark:bg-dark-bg-secondary text-secondary-900 dark:text-dark-text-primary placeholder:text-secondary-400 dark:placeholder:text-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent`}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2">
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email ? 'border-red-500 dark:border-red-400' : 'border-secondary-300 dark:border-dark-border'
          } bg-white dark:bg-dark-bg-secondary text-secondary-900 dark:text-dark-text-primary placeholder:text-secondary-400 dark:placeholder:text-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email.message}</p>}
      </div>

      {/* Phone and Company (Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2">
            Phone (Optional)
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-secondary-900 dark:text-dark-text-primary placeholder:text-secondary-400 dark:placeholder:text-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2">
            Company (Optional)
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-secondary-900 dark:text-dark-text-primary placeholder:text-secondary-400 dark:placeholder:text-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
            placeholder="Your company name"
          />
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2">
          Project Type *
        </label>
        <select
          {...register('projectType')}
          id="projectType"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.projectType ? 'border-red-500 dark:border-red-400' : 'border-secondary-300 dark:border-dark-border'
          } bg-white dark:bg-dark-bg-secondary text-secondary-900 dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent`}
        >
          <option value="">Select a project type</option>
          <option value="new-website">New Website</option>
          <option value="website-redesign">Website Redesign</option>
          <option value="ecommerce-store">eCommerce Store</option>
          <option value="web-application">Web Application</option>
          <option value="other">Other</option>
        </select>
        {errors.projectType && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.projectType.message}</p>}
      </div>

      {/* Budget and Timeline (Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2">
            Budget Range *
          </label>
          <select
            {...register('budget')}
            id="budget"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.budget ? 'border-red-500 dark:border-red-400' : 'border-secondary-300 dark:border-dark-border'
            } bg-white dark:bg-dark-bg-secondary text-secondary-900 dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent`}
          >
            <option value="">Select budget range</option>
            <option value="20k-50k">₹20,000 - ₹50,000</option>
            <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
            <option value="1lakh-2lakh">₹1,00,000 - ₹2,00,000</option>
            <option value="2lakh-5lakh">₹2,00,000 - ₹5,00,000</option>
            <option value="5lakh-plus">₹5,00,000+</option>
            <option value="not-sure">Not Sure Yet</option>
          </select>
          {errors.budget && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.budget.message}</p>}
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2">
            Timeline *
          </label>
          <select
            {...register('timeline')}
            id="timeline"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.timeline ? 'border-red-500 dark:border-red-400' : 'border-secondary-300 dark:border-dark-border'
            } bg-white dark:bg-dark-bg-secondary text-secondary-900 dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent`}
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP (1-2 weeks)</option>
            <option value="1-2-months">1-2 months</option>
            <option value="2-3-months">2-3 months</option>
            <option value="3-plus-months">3+ months</option>
            <option value="exploring">Just Exploring</option>
          </select>
          {errors.timeline && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.timeline.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-secondary-900 dark:text-dark-text-primary mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message ? 'border-red-500 dark:border-red-400' : 'border-secondary-300 dark:border-dark-border'
          } bg-white dark:bg-dark-bg-secondary text-secondary-900 dark:text-dark-text-primary placeholder:text-secondary-400 dark:placeholder:text-dark-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent resize-none`}
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-auto px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-400 px-4 py-3 rounded-lg">
          Thank you for your message! We'll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-400 px-4 py-3 rounded-lg">
          Something went wrong. Please try again or email us directly at hello@bob2build.com
        </div>
      )}
    </form>
  );
};

export default ContactForm;
