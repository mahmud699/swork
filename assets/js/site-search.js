// Simple keyword-based site search — routes the visitor to the most relevant page.
function siteSearch(event) {
  event.preventDefault();

  var input = document.querySelector('#search input[name="search"]');
  var query = (input ? input.value : '').toLowerCase().trim();

  var routes = [
    {
      page: 'gallery.html',
      keywords: ['gallery', 'photo', 'picture', 'image', 'album', 'event', 'campaign',
                 'ছবি', 'গ্যালারি', 'ইভেন্ট', 'ক্যাম্পেইন', 'হামদ', 'নাত', 'স্টুডেন্ট কাপ', 'কার্যক্রম']
    },
    {
      page: 'services.html',
      keywords: ['donate', 'donation', 'bkash', 'nagad', 'rocket', 'payment', 'money', 'fund',
                 'ডোনেশন', 'দান', 'অনুদান', 'বিকাশ', 'নগদ', 'রকেট', 'টাকা', 'পেমেন্ট']
    },
    {
      page: 'contact.html',
      keywords: ['contact', 'phone', 'email', 'address', 'location', 'reach', 'message',
                 'যোগাযোগ', 'ফোন', 'ইমেইল', 'ঠিকানা', 'মেসেজ']
    },
    {
      page: 'about.html',
      keywords: ['about', 'history', 'mission', 'team', 'who we are', 'goal',
                 'পরিচিতি', 'সম্পর্কে', 'আমাদের', 'লক্ষ্য', 'উদ্দেশ্য', 'টিম']
    }
  ];

  var matchedPage = null;

  for (var i = 0; i < routes.length && !matchedPage; i++) {
    for (var j = 0; j < routes[i].keywords.length; j++) {
      if (query.indexOf(routes[i].keywords[j]) !== -1) {
        matchedPage = routes[i].page;
        break;
      }
    }
  }

  // no keyword matched -> fall back to homepage
  window.location.href = matchedPage || 'index.html';
  return false;
}
