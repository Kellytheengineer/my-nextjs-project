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

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    to_name: 'Recipient',
    message: '',
    reply_to: ''
  });

  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init("jt6KXX71FOEpeeEt-");
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_5iuvj4s', 'template_1wp3pcn', form.current)
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
    <div className="min-h-screen bg-gradient-to-br from-[#d99ae3] to-[#491e6b] py-12">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Me</h1>
        <Card className="max-w-md mx-auto">
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


