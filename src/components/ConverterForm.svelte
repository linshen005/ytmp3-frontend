<script>
  import axios from 'axios';
  import { onMount } from 'svelte';

  let url = '';
  let format = 'mp3';
  let loading = false;
  let error = '';

  const isValidUrl = (value) =>
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|shorts\/)|youtu\.be\/)[\w-]+/.test(value);

  function handleFormatSelect(selectedFormat) {
    console.log('Selected format:', selectedFormat);
    format = selectedFormat;
  }

  async function handleSubmit() {
    error = '';

    if (!isValidUrl(url)) {
      error = 'Please enter a valid YouTube video URL';
      return;
    }

    loading = true;
    try {
      const response = await axios.post('https://api.youtomp3.me/api/download', { url, format });
      window.location.href = response.data.download_url;
    } catch (err) {
      error = err.response?.data?.message || 'Conversion failed, please try again later';
    } finally {
      loading = false;
    }
  }
</script>

<div class="bg-white p-6 rounded-lg shadow-md">
  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div>
      <label for="videoUrl" class="block text-sm font-medium text-gray-700 mb-2">
        YouTube Video URL
      </label>
      <div class="relative">
        <input
          id="videoUrl"
          type="text"
          bind:value={url}
          placeholder="https://www.youtube.com/watch?v=..."
          class="input-primary"
          required
        />
        {#if url}
          <button
            type="button"
            on:click={() => url = ''}
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        {/if}
      </div>
    </div>

    <div class="flex justify-center space-x-4">
      <button
        type="button"
        on:click={() => handleFormatSelect('mp3')}
        class="w-32 p-4 rounded-lg text-center transition-all duration-200 {format === 'mp3' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
      >
        <strong class="block text-base">MP3</strong>
        <span class="text-sm">Audio Only</span>
      </button>

      <button
        type="button"
        on:click={() => handleFormatSelect('mp4')}
        class="w-32 p-4 rounded-lg text-center transition-all duration-200 {format === 'mp4' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
      >
        <strong class="block text-base">MP4</strong>
        <span class="text-sm">Video + Audio</span>
      </button>
    </div>

    <div class="text-center text-sm text-gray-500">
      Selected Format: <span class="font-medium">{format.toUpperCase()}</span>
    </div>

    <div>
      <button
        type="submit"
        disabled={loading || !url}
        class="btn-primary w-full py-3"
      >
        {loading ? 'Converting...' : 'Start Convert'}
      </button>
    </div>

    {#if error}
      <div class="text-red-500 text-center mt-4">{error}</div>
    {/if}
  </form>
</div> 