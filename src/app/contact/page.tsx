'use client'

import React, { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';

interface FormData {
  from_name: string;
  to_name: string;
  message: string;
  reply_to: string;
}

const ContactPage: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    to_name: 'Recipient',
    message: '',
    reply_to: ''
  });

  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current
      )
        .then((result) => {
          console.log('Email successfully sent!', result.text);
          alert('Message sent successfully!');
          setFormData({ from_name: '', to_name: 'Recipient', message: '', reply_to: '' });
        }, (error) => {
          console.error('Failed to send email. Error: ', error.text);
          alert('There was an error sending your message. Please try again.');
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Me</h1>
        <Card className="max-w-md mx-auto bg-white">
          <CardContent className="p-6">
            <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <Input 
                  id="from_name" 
                  name="from_name" 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.from_name} 
                  onChange={handleChange} 
                  required // Marking as required for better form validation
                />
              </div>
              <div>
                <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700">Your Email</label>
                <Input 
                  id="reply_to" 
                  name="reply_to" 
                  type="email" 
                  placeholder="your@email.com" 
                  value={formData.reply_to} 
                  onChange={handleChange} 
                  required // Marking as required for better form validation
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your message here..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  required // Marking as required for better form validation
                />
              </div>
              <Input 
                type="hidden" 
                name="to_name" 
                value={formData.to_name} 
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" className="w-full">Send Message</Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default ContactPage;
