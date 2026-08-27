"use client";

import React from "react";
import { ShieldCheck, Scale, Lock, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyTermsPage() {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-slate-100">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
              {isBn ? "গোপনীয়তা নীতি এবং শর্তাবলী" : "Privacy Policy & Terms"}
            </h1>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              {isBn 
                ? "ওয়ে অফ লাইট ট্রাস্ট (WOLT) আপনার গোপনীয়তা রক্ষা করতে এবং আমাদের সমস্ত কার্যক্রমে স্বচ্ছতা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। অনুগ্রহ করে আমাদের নীতিগুলি মনোযোগ দিয়ে পড়ুন।" 
                : "Way of Light Trust (WOLT) is committed to protecting your privacy and ensuring transparency in all our operations. Please read our policies carefully."}
            </p>
          </div>

          {/* Privacy Policy Section */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-4">
              <ShieldCheck className="w-8 h-8 text-pink-600" />
              <h2 className="text-3xl font-bold text-slate-900">
                {isBn ? "গোপনীয়তা নীতি" : "Privacy Policy"}
              </h2>
            </div>
            
            <div className="space-y-8 text-slate-600 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" /> 
                  {isBn ? "১. তথ্য সংগ্রহ" : "1. Information Collection"}
                </h3>
                <p>
                  {isBn 
                    ? "WOLT ফাউন্ডেশন আপনার গোপনীয়তাকে সম্মান করে এবং নিশ্চিত করে যে আপনার ব্যক্তিগত তথ্য সুরক্ষিত। আমরা আপনার নাম, ইমেল ঠিকানা, ফোন নম্বর এবং শারীরিক ঠিকানার মতো তথ্য সংগ্রহ করি শুধুমাত্র তখনই যখন আমাদের দর্শকরা স্বেচ্ছায় জমা দেয় (যেমন, অনুদান দেওয়ার সময়, নিউজলেটারে সাবস্ক্রাইব করা বা স্বেচ্ছাসেবক হিসাবে নিবন্ধন করার সময়)।" 
                    : "WOLT Foundation respects your privacy and ensures that your personal information is protected. We collect information such as your name, email address, phone number, and physical address only when voluntarily submitted by our visitors (e.g., when making a donation, subscribing to newsletters, or registering as a volunteer)."}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-blue-600" /> 
                  {isBn ? "২. তথ্যের ব্যবহার এবং সুরক্ষা" : "2. Use and Protection of Information"}
                </h3>
                <p className="mb-4">
                  {isBn 
                    ? "আমরা যে ব্যক্তিগত তথ্য সংগ্রহ করি তা একচেটিয়াভাবে অভ্যন্তরীণ উদ্দেশ্যে ব্যবহার করা হয়, যেমন অনুদান প্রক্রিয়া করা, রসিদ পাঠানো এবং আমাদের প্রোগ্রাম সম্পর্কে আপনাকে আপডেট করা। অননুমোদিত অ্যাক্সেস, প্রকাশ বা পরিবর্তন থেকে আপনার ব্যক্তিগত ডেটা সুরক্ষিত রাখতে আমরা শিল্প-মানক সুরক্ষা ব্যবস্থা নিযুক্ত করি।" 
                    : "The personal information we collect is used exclusively for internal purposes, such as processing donations, sending receipts, and updating you on our programs. We employ industry-standard security measures to safeguard your personal data from unauthorized access, disclosure, or alteration."}
                </p>
                <p>
                  {isBn 
                    ? <>WOLT কঠোরভাবে এই নীতি মেনে চলে যে আমরা তৃতীয় পক্ষের কাছে আপনার ব্যক্তিগত তথ্য <strong>বিক্রি, শেয়ার বা ভাড়া দিই না</strong>, গণপ্রজাতন্ত্রী বাংলাদেশের আইন দ্বারা প্রয়োজনীয় ক্ষেত্র ব্যতীত।</> 
                    : <>WOLT strictly abides by the principle that we <strong>do not sell, share, or rent</strong> your personal information to third parties, except as required by the law of the People's Republic of Bangladesh.</>}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" /> 
                  {isBn ? "৩. কুকিজ এবং ট্র্যাকিং" : "3. Cookies and Tracking"}
                </h3>
                <p>
                  {isBn 
                    ? "আমাদের ওয়েবসাইট ব্যবহারকারীর অভিজ্ঞতা বাড়াতে এবং ওয়েবসাইটের ট্রাফিক বিশ্লেষণ করতে \"কুকিজ\" ব্যবহার করতে পারে। এই কুকিজ ব্যক্তিগতভাবে শনাক্তযোগ্য তথ্য সংগ্রহ করে না। আপনি আপনার ওয়েব ব্রাউজারকে কুকিজ প্রত্যাখ্যান করার জন্য সেট করতে পারেন বা কুকিজ পাঠানো হলে আপনাকে সতর্ক করতে পারেন।" 
                    : "Our website may use \"cookies\" to enhance user experience and analyze website traffic. These cookies do not collect personally identifiable information. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent."}
                </p>
              </div>
            </div>
          </section>

          {/* Terms and Conditions Section */}
          <section>
            <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-4">
              <Scale className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-slate-900">
                {isBn ? "শর্তাবলী" : "Terms and Conditions"}
              </h2>
            </div>
            
            <div className="space-y-8 text-slate-600 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{isBn ? "১. শর্তাবলী গ্রহণ" : "1. Acceptance of Terms"}</h3>
                <p>
                  {isBn 
                    ? "WOLT ফাউন্ডেশন ওয়েবসাইট অ্যাক্সেস এবং ব্যবহার করে, আপনি এই শর্তাবলী দ্বারা আবদ্ধ হতে সম্মত হন। আপনি যদি এই শর্তাবলীতে সম্মত না হন তবে দয়া করে আমাদের ওয়েবসাইট ব্যবহার করবেন না।" 
                    : "By accessing and using the WOLT Foundation website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website."}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{isBn ? "২. বুদ্ধিবৃত্তিক সম্পত্তি" : "2. Intellectual Property"}</h3>
                <p>
                  {isBn 
                    ? "এই ওয়েবসাইটের সমস্ত সামগ্রী, পাঠ্য, গ্রাফিক্স, লোগো, ছবি এবং সফ্টওয়্যার সহ, WOLT ফাউন্ডেশনের সম্পত্তি এবং কপিরাইট এবং অন্যান্য মেধা সম্পত্তি আইন দ্বারা সুরক্ষিত। আপনি আমাদের পূর্ব লিখিত সম্মতি ছাড়া কোনো সামগ্রী পুনরুত্পাদন, বিতরণ বা সংশোধন করতে পারবেন না।" 
                    : "All content on this website, including text, graphics, logos, images, and software, is the property of WOLT Foundation and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent."}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{isBn ? "৩. অনুদান এবং ফেরত নীতি" : "3. Donation and Refund Policy"}</h3>
                <p>
                  {isBn 
                    ? "আমরা আপনার আর্থিক সহায়তার জন্য গভীরভাবে কৃতজ্ঞ। WOLT ফাউন্ডেশনকে দেওয়া অনুদান সাধারণত অ-ফেরতযোগ্য। তবে, অনুদানের পরিমাণে কোনো ত্রুটি হলে বা অননুমোদিত লেনদেন ঘটলে, পর্যালোচনা এবং সম্ভাব্য ফেরতের জন্য লেনদেনের ৭ দিনের মধ্যে আমাদের সাথে যোগাযোগ করুন।" 
                    : "We are deeply grateful for your financial support. Donations made to WOLT Foundation are generally non-refundable. However, if an error is made in the amount of the donation or if an unauthorized transaction occurs, please contact us within 7 days of the transaction for a review and potential refund."}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{isBn ? "৪. দায়বদ্ধতার অস্বীকৃতি" : "4. Disclaimer of Liability"}</h3>
                <p>
                  {isBn 
                    ? "যদিও আমরা এই ওয়েবসাইটের তথ্য সঠিক এবং আপ-টু-ডেট রাখার চেষ্টা করি, WOLT ফাউন্ডেশন সামগ্রীর নির্ভুলতা বা সম্পূর্ণতা সম্পর্কিত কোনো ওয়ারেন্টি বা উপস্থাপনা করে না। আমাদের ওয়েবসাইট ব্যবহারের ফলে উদ্ভূত কোনো প্রত্যক্ষ, পরোক্ষ বা আনুষঙ্গিক ক্ষতির জন্য আমরা দায়ী থাকব না।" 
                    : "While we strive to keep the information on this website accurate and up-to-date, WOLT Foundation makes no warranties or representations regarding the accuracy or completeness of the content. We shall not be held liable for any direct, indirect, or consequential damages arising from the use of our website."}
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mt-8">
                <p className="font-medium text-slate-900">
                  {isBn ? "সর্বশেষ আপডেট: " : "Last Updated: "} 
                  {new Date().toLocaleDateString(isBn ? 'bn-BD' : 'en-US', { month: 'long', year: 'numeric' })}
                </p>
                <p className="mt-2 text-sm">
                  {isBn ? "আমাদের গোপনীয়তা নীতি বা শর্তাবলী সম্পর্কে কোনো প্রশ্নের জন্য, অনুগ্রহ করে " : "For any queries regarding our privacy practices or terms, please contact us at "}
                  <strong>robic2000@hotmail.com</strong> {isBn ? "এ আমাদের সাথে যোগাযোগ করুন।" : ""}
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
