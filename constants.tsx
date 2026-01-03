
import { ModuleItem, SupportChannel, Testimonial } from './types';

export const BRAND_NAME = "Landing Magic";
export const LOGO_TEXT = "LPM";

export const SUPPORT_DATA: SupportChannel[] = [
  {
    channel: "WhatsApp গ্রুপ",
    time: "১০AM-৭PM",
    link: "https://chat.whatsapp.com/JBXuMy5PmcjHMiAawJStDw",
    linkText: "যোগ দিন"
  },
  {
    channel: "ব্যক্তিগত পরামর্শ",
    time: "২৪/৭",
    link: "https://wa.me/message/FZJIQGRK2IKEM1",
    linkText: "কল করুন"
  },
  {
    channel: "জরুরি ফোন",
    time: "সবসময়",
    link: "tel:+8809647122285",
    linkText: "+8809647122285"
  }
];

export const COURSE_MODULES: ModuleItem[] = [
  {
    id: 1,
    title: "১. ব্র্যান্ডিং - Namelix + Adobe Color",
    description: "আপনার ব্যবসার জন্য প্রফেশনাল নাম এবং কালার প্যালেট নির্বাচন করা শিখুন।",
    videos: [
      { title: "ব্যান্ডিং গাইড", url: "https://www.youtube.com/watch?v=8pcqv6RvcEI", videoId: "8pcqv6RvcEI" }
    ]
  },
  {
    id: 2,
    title: "২. AI ল্যান্ডিং পেজ",
    description: "আর্টিফিশিয়াল ইন্টেলিজেন্স ব্যবহার করে কয়েক মিনিটে হাই-কনভার্টিং ল্যান্ডিং পেজ তৈরি।",
    videos: [
      { title: "AI বিল্ডার টিউটোরিয়াল", url: "https://youtu.be/yyWi76qPbsQ", videoId: "yyWi76qPbsQ" }
    ]
  },
  {
    id: 3,
    title: "৩. কাস্টমাইজেশন",
    description: "৩টি বিশেষ ভিডিও এবং ১২টি ভিডিওর মাস্টার প্লেলিস্ট।",
    videos: [
      { title: "কাস্টমাইজেশন ভিডিও ১", url: "https://www.youtube.com/watch?v=8pcqv6RvcEI", videoId: "8pcqv6RvcEI" }
    ]
  },
  {
    id: 4,
    title: "৪. অর্ডার ম্যানেজমেন্ট - Pathao API",
    description: "পাঠাও এবং অন্যান্য কুরিয়ার এপিআই ইন্টিগ্রেশন এবং সহজ অর্ডার ট্র্যাকিং।",
    videos: [
      { title: "অর্ডার ট্র্যাকিং সেটআপ", url: "https://www.youtube.com/watch?v=8pcqv6RvcEI", videoId: "8pcqv6RvcEI" }
    ]
  },
  {
    id: 5,
    title: "৫. ট্র্যাকিং - FB Pixel + GTM",
    description: "ফেসবুক পিক্সেল এবং গুগল ট্যাগ ম্যানেজার সেটআপ করে কাস্টমার ডেটা ট্রাক করা।",
    videos: [
      { title: "পিক্সেল ট্র্যাকিং গাইড", url: "https://www.youtube.com/watch?v=8pcqv6RvcEI", videoId: "8pcqv6RvcEI" }
    ]
  },
  {
    id: 6,
    title: "৬. অটোমেশন",
    description: "৩টি ভিডিওর মাধ্যমে শিখুন কিভাবে বিজনেস অটোমেশনে নিয়ে যাবেন।",
    videos: [
      { title: "অটোমেশন টিউটোরিয়াল", url: "https://www.youtube.com/watch?v=8pcqv6RvcEI", videoId: "8pcqv6RvcEI" }
    ]
  },
  {
    id: 7,
    title: "৭. মার্কেটিং",
    description: "আপনার সেলস বাড়ানোর জন্য অ্যাডভান্সড মার্কেটিং কৌশল।",
    status: "শীঘ্রই আসছে"
  },
  {
    id: 8,
    title: "৮. এজেন্সি সার্ভিস",
    description: "প্রফেশনালদের থেকে সরাসরি আপনার বিজনেস সেটআপ করিয়ে নিন।",
    videos: [
      { title: "সার্ভিস ডিটেইলস", url: "https://elgrowth.com/agencyservice" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "তানজিল আহমেদ",
    role: "SME উদ্যোক্তা",
    image: "https://i.pravatar.cc/150?u=tan",
    feedback: "এই কোর্সটি আমার অনলাইন ব্যবসার ধারণা সম্পূর্ণ বদলে দিয়েছে। এখন আমি নিজেই নিজের ল্যান্ডিং পেজ তৈরি করতে পারি এবং সেলস ৩ গুণ বেড়েছে!",
    rating: 5
  },
  {
    id: 2,
    name: "সাদিয়া ইসলাম",
    role: "ফ্রিল্যান্সার",
    image: "https://i.pravatar.cc/150?u=sad",
    feedback: "AI এবং অটোমেশনের মডিউলগুলো ছিল জাদুকরী। আগে যে কাজ করতে ৩ দিন লাগতো, এখন ৩ ঘণ্টায় সেটা শেষ করতে পারছি।",
    rating: 5
  },
  {
    id: 3,
    name: "রাকিব হাসান",
    role: "মার্কেটিং এক্সপার্ট",
    image: "https://i.pravatar.cc/150?u=rak",
    feedback: "ফেসবুক পিক্সেল এবং GTM ট্র্যাকিং এর গাইডলাইনগুলো বাংলাদেশে সচরাচর কোথাও পাওয়া যায় না। মেন্টর সাপোর্ট ছিল অতুলনীয়।",
    rating: 5
  }
];

export const WHATSAPP_LINK = "https://chat.whatsapp.com/JBXuMy5PmcjHMiAawJStDw";
export const AGENCY_LINK = "https://elgrowth.com/agencyservice";
