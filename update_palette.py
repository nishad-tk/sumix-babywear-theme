import json
import re

file_path = 'config/settings_data.json'

with open(file_path, 'r') as f:
    content = f.read()

# Remove multi-line comments
content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
# Remove single-line comments
content = re.sub(r'//.*', '', content)

data = json.loads(content)

# Update Scheme 1 (Primary)
if 'scheme-1' in data['current']['color_schemes']:
    s = data['current']['color_schemes']['scheme-1']['settings']
    s['background'] = '#FDF8F3' # Cream
    s['foreground'] = '#1F1F1F'
    s['foreground_heading'] = '#111827'
    s['primary_button_background'] = '#6B3FA0' # Primary
    s['primary_button_hover_background'] = '#5A3490'
    s['primary_button_text'] = '#FFFFFF'

# Update Scheme 2 (Secondary/Accent)
if 'scheme-2' in data['current']['color_schemes']:
    s = data['current']['color_schemes']['scheme-2']['settings']
    s['background'] = '#FFFFFF'
    s['primary_button_background'] = '#F4A261' # Accent
    s['primary_button_hover_background'] = '#e69154'
    
# Apply to Horizon preset as well
if 'presets' in data and 'Horizon' in data['presets']:
    preset_schemes = data['presets']['Horizon']['color_schemes']
    if 'scheme-1' in preset_schemes:
        s = preset_schemes['scheme-1']['settings']
        s['background'] = '#FDF8F3'
        s['foreground'] = '#1F1F1F'
        s['foreground_heading'] = '#111827'
        s['primary_button_background'] = '#6B3FA0'
        s['primary_button_hover_background'] = '#5A3490'
        s['primary_button_text'] = '#FFFFFF'
    if 'scheme-2' in preset_schemes:
        s = preset_schemes['scheme-2']['settings']
        s['background'] = '#FFFFFF'
        s['primary_button_background'] = '#F4A261'
        s['primary_button_hover_background'] = '#e69154'

# Button border radius
data['current']['button_border_radius_primary'] = 30
data['current']['button_border_radius_secondary'] = 30

with open(file_path, 'w') as f:
    json.dump(data, f, indent=2)

print("Settings updated successfully.")
