import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="font-semibold text-center pt-[30px]">&nbsp;</h1>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              আমাদের সম্পর্কে
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ
              হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন
              নিয়ে আসে প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয়
              দুই শূন্য হাতে মুঠো বেঁধে। মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে
              প্রকৃতির ভূরিব্যয়ের পালা শেষ হয়ে এসেছে। বিপুল মাংস, কঠিন বর্ম,
              প্রকাণ্ড লেজ নিয়ে জলে স্থলে পৃথুল দেহের যে অমিতাচার প্রবল হয়ে
              উঠেছিল তাতে ধরিত্রীকে দিলে ক্লান্ত করে। প্রমাণ হল আতিশয্যের পরাভব
              অনিবার্য। পরীক্ষায় এটাও স্থির হয়ে গেল যে, প্রশ্রয়ের পরিমাণ যত
              বেশি হয় দুর্বলতার বোঝাও তত দুর্বহ হয়ে ওঠে। নূতন পর্বে প্রকৃতি
              যথাসম্ভব মানুষের বরাদ্দ কম করে দিয়ে নিজে রইল নেপথ্যে। মানুষকে
              দেখতে হল খুব ছোটো, কিন্তু সেটা একটা কৌশল মাত্র। এবারকার জীবযাত্রার
              পালায় বিপুলতাকে করা হল বহুলতায় পরিণত। মহাকায় জন্তু ছিল প্রকাণ্ড
              একলা, মানুষ হল দূরপ্রসারিত অনেক।
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="/about.png"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              আমাদের গল্প
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত
              ইউক্যালিপটাস অংশাবতার হালহদিশ পিতৃতর্পণ টকানো ঈক্ষিত জগজ্জন
              তকতনামা আঁকুবাঁকু পঁইছা জগঝপ্প পঁহুছা দ্রাবিড়ী আঁকুড়ি ঈদৃক
              জগদম্বা টঙ্ক অংশিন্‌ জগদ্গৌরী আঁচা তকরার তিলপিটালি গজ-দাঁত অংশু
              ঈপ্সনীয় পইতা শংকরাভরণ হংসগমন পকড় অংশুধর ঈপ্সু ঈর্ষী জগদ্ধাত্রী
              আঁজনাই তক্তি শংসনপত্র হংসারূঢ়া দংশল তক্ষক অংশুমান ইকেবানা
              জগদ্বন্ধু ঈশিত্ব ইক্ষ্বাকু আঁজি অংসকুট টঙ্কক তক্ষণাস্ত্র পকোড়া
              দংষ্ট্রা শকটিকা হকচকা বঁইচি শকল বংশাঙ্কুর তক্ষণী আঁটকুড়
              ঈশ্বরদ্বেষী টঙ্কার পক্ববিম্বাধরোষ্ঠী শকারবকার হট্টবিলাসিনী
              বংশাবতংস ইঙ্গবঙ্গ পক্ষচ্ছেদ দংষ্ট্রাল হঠযোগ অষ্টনাগ পক্ষপাতিতা
              টনটনানি ঈশ্বরাজ্ঞা বউল
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
