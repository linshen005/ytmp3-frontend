<script>
  import ConverterForm from './components/ConverterForm.svelte';
  import FAQ from './components/FAQ.svelte';
</script>

<main class="min-h-screen py-12">
  <div class="max-w-container mx-auto px-4">
    <h1 class="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-title-gradient">
      YouTube to MP3/MP4 Converter
    </h1>
    
    <p class="text-center text-gray-600 mb-8">
      Free YouTube to MP3/MP4 online converter tool. Convert your favorite YouTube videos to audio or video format with just one click.
    </p>

    <div class="max-w-form mx-auto">
      <ConverterForm />
    </div>

    <div class="mt-16">
      <FAQ />
    </div>

    <footer class="text-center text-gray-500 text-sm mt-16">
      © 2024 youtomp3.me - All rights reserved.
    </footer>
  </div>
</main> 