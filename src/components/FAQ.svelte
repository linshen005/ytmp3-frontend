<script>
  const faqData = [
    {
      question: 'What is youtomp3.me?',
      answer: 'Youtomp3.me is a free online tool that allows you to convert YouTube videos to MP3 or MP4 format quickly and easily.'
    },
    {
      question: 'How do I convert YouTube to MP3 or MP4?',
      answer: 'Simply paste your YouTube video URL, select your desired format (MP3 or MP4), and click Convert. Your file will be ready to download in seconds.'
    },
    {
      question: 'Is it legal to use YouTube to MP3 or MP4 converters?',
      answer: 'Our service is legal for converting and downloading non-copyrighted videos or those with appropriate permissions. Always respect copyright laws and YouTube\'s terms of service.'
    },
    {
      question: 'Does this work on mobile and desktop?',
      answer: 'Yes, our converter works on all devices including smartphones, tablets, and computers. No app installation required.'
    },
    {
      question: 'Are there any limits or ads?',
      answer: 'No limits on conversions and no ads! Our service is completely free to use.'
    },
    {
      question: 'What formats are supported?',
      answer: 'We support MP3 (audio) and MP4 (video) formats with high quality output.'
    }
  ];

  let openIndex = -1;

  const toggleFaq = (index) => {
    openIndex = openIndex === index ? -1 : index;
  };
</script>

<div class="mt-16 max-w-container mx-auto px-4">
  <h2 class="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
  
  <div class="space-y-3">
    {#each faqData as faq, index}
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <button
          class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
          on:click={() => toggleFaq(index)}
        >
          <span class="font-medium">{faq.question}</span>
          <span class="transform transition-transform duration-200 {openIndex === index ? 'rotate-180' : ''}">
            ▼
          </span>
        </button>
        
        {#if openIndex === index}
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <p class="text-gray-600">{faq.answer}</p>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div> 