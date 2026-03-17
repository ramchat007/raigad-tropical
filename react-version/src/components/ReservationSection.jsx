import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import pb from '@/lib/pocketbaseClient';

const ReservationSection = React.forwardRef((props, ref) => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    guest_name: '',
    email: '',
    phone: '',
    party_size: '2',
    reservation_date: '',
    reservation_time: '8:00 PM',
    special_requests: ''
  });

  const setRefs = node => {
    sectionRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  const validateForm = () => {
    if (!formData.guest_name.trim()) {
      toast({
        title: "Guest name is required",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Email is required",
        variant: "destructive"
      });
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.phone.trim()) {
      toast({
        title: "Phone number is required",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.reservation_date) {
      toast({
        title: "Reservation date is required",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.reservation_time) {
      toast({
        title: "Reservation time is required",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.party_size) {
      toast({
        title: "Party size is required",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Create reservation in PocketBase
      const record = await pb.collection('reservations').create({
        guest_name: formData.guest_name,
        email: formData.email,
        phone: formData.phone,
        reservation_date: formData.reservation_date,
        reservation_time: formData.reservation_time,
        party_size: parseInt(formData.party_size),
        special_requests: formData.special_requests || ''
      }, { $autoCancel: false });

      // Show success message
      toast({
        title: "Reservation Submitted Successfully! ✨",
        description: `Table for ${formData.party_size} on ${new Date(formData.reservation_date).toLocaleDateString()} at ${formData.reservation_time}`
      });

      // Reset form
      setFormData({
        guest_name: '',
        email: '',
        phone: '',
        party_size: '2',
        reservation_date: '',
        reservation_time: '8:00 PM',
        special_requests: ''
      });

    } catch (error) {
      console.error('Reservation error:', error);
      
      // User-friendly error messages
      let errorMessage = 'Failed to submit reservation. Please try again.';
      
      if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (error.data?.data) {
        // PocketBase validation errors
        const firstError = Object.values(error.data.data)[0];
        if (firstError?.message) {
          errorMessage = firstError.message;
        }
      }

      toast({
        title: "Reservation Failed",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={setRefs} className="py-24 bg-[#F5F1EB]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#6B5D4F] mb-4">
            Reserve a Table
          </h2>
          <p className="text-[#6B5D4F]/70">Enter your details and we'll get you the best seats for an unforgettable evening</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="guest_name" className="text-[#6B5D4F] mb-2 block">
                Guest Name *
              </Label>
              <Input
                id="guest_name"
                type="text"
                value={formData.guest_name}
                onChange={(e) => setFormData({ ...formData, guest_name: e.target.value })}
                placeholder="John Doe"
                className="border-[#E8E0D5] focus:border-[#8B7355] text-gray-900"
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-[#6B5D4F] mb-2 block">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="border-[#E8E0D5] focus:border-[#8B7355] text-gray-900"
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-[#6B5D4F] mb-2 block">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 123-4567"
                className="border-[#E8E0D5] focus:border-[#8B7355] text-gray-900"
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="party_size" className="text-[#6B5D4F] mb-2 block">
                Party Size *
              </Label>
              <Select
                value={formData.party_size}
                onValueChange={(value) => setFormData({ ...formData, party_size: value })}
                disabled={isLoading}
              >
                <SelectTrigger className="w-full border-[#E8E0D5] focus:border-[#8B7355]">
                  <SelectValue placeholder="2 guests" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => (
                    <SelectItem key={num} value={`${num}`}>
                      {num} {num === 1 ? 'guest' : 'guests'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="reservation_date" className="text-[#6B5D4F] mb-2 block">
                Date *
              </Label>
              <Input
                id="reservation_date"
                type="date"
                value={formData.reservation_date}
                onChange={(e) => setFormData({ ...formData, reservation_date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="border-[#E8E0D5] focus:border-[#8B7355] text-gray-900"
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="reservation_time" className="text-[#6B5D4F] mb-2 block">
                Time *
              </Label>
              <Select
                value={formData.reservation_time}
                onValueChange={(value) => setFormData({ ...formData, reservation_time: value })}
                disabled={isLoading}
              >
                <SelectTrigger className="w-full border-[#E8E0D5] focus:border-[#8B7355]">
                  <SelectValue placeholder="8:00 PM" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
                    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
                    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
                    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
                    '9:00 PM', '9:30 PM', '10:00 PM'
                  ].map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="special_requests" className="text-[#6B5D4F] mb-2 block">
              Special Requests (Optional)
            </Label>
            <Textarea
              id="special_requests"
              value={formData.special_requests}
              onChange={(e) => setFormData({ ...formData, special_requests: e.target.value })}
              placeholder="Any dietary restrictions, allergies, or special occasions we should know about?"
              className="border-[#E8E0D5] focus:border-[#8B7355] text-gray-900 min-h-[100px]"
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#8B7355] hover:bg-[#6B5D4F] text-white py-6 text-lg"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Reserve Table'}
          </Button>
        </motion.form>
      </div>
    </section>
  );
});

export default ReservationSection;