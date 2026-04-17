import os
import re

html_dir = '.'
for f in os.listdir(html_dir):
    if not f.endswith('.html'): continue
    
    path = os.path.join(html_dir, f)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Replace poster placeholders
    content = content.replace('https://placehold.co/300x450/4A1A1A/FFFFFF?text=Aane+Vaala', 'poster1.png')
    content = content.replace('https://placehold.co/300x450/1C3C3E/FFFFFF?text=Bollywood', 'poster2.png')
    content = content.replace('https://placehold.co/300x450/7A6855/FFFFFF?text=Pushpa+2', 'poster3.png')
    content = content.replace('https://placehold.co/300x450/B89823/FFFFFF?text=Salaar', 'poster4.png')

    # Replace logo HTML blocks
    pattern1 = r'<a href="index\.html" class="logo-wrap">\s*<div[^>]*></div>\s*<div[^>]*></div>\s*<span[^>]*>(?:.*?)</span>\s*</a>'
    rep1 = '<a href="index.html" class="logo-wrap" style="display:flex; align-items:center; gap: 8px;"><img src="logo.svg" style="height:38px;" alt="DigiTicket"></a>'
    content = re.sub(pattern1, rep1, content, flags=re.DOTALL)
    
    pattern1_no_wrapper = r'<div style="background: #FF4E72; width: 35px; height: 25px; border-radius: 4px; transform: rotate\(-5deg\) translateY\(-2px\); z-index: 2;"></div>\s*<div style="background: #FF9C3A; width: 35px; height: 25px; border-radius: 4px; transform: translateX\(-25px\) translateY\(8px\); z-index: 1;"></div>\s*<span class="logo-text">Digi<span class="logo-italic">Ticket</span></span>'
    content = re.sub(pattern1_no_wrapper, '<img src="logo.svg" style="height:38px;" alt="DigiTicket">', content, flags=re.DOTALL)
    
    pattern2 = r'<div class="logo-wrap-large">\s*<div[^>]*></div>\s*<div[^>]*></div>\s*<span[^>]*>(?:.*?)</span>\s*</div>'
    rep2 = '<div class="logo-wrap-large" style="display:flex; justify-content:center; align-items:center; gap:8px;"><img src="logo.svg" style="height:45px; cursor:pointer" onclick="window.location.href=\'index.html\'"></div>'
    content = re.sub(pattern2, rep2, content, flags=re.DOTALL)
    
    with open(path, 'w', encoding='utf-8') as file:
        file.write(content)

print('Updated scripts.')
