const fs = require('fs');
const file = './config/settings_data.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Update color schemes in 'current'
const currentSchemes = data.current.color_schemes;
if (currentSchemes) {
  // Scheme 1: Primary Brand Colors (Cream background, Purple buttons)
  if (currentSchemes['scheme-1']) {
    currentSchemes['scheme-1'].settings.background = '#FDF8F3';
    currentSchemes['scheme-1'].settings.foreground = '#1F1F1F';
    currentSchemes['scheme-1'].settings.foreground_heading = '#111827';
    currentSchemes['scheme-1'].settings.primary_button_background = '#6B3FA0';
    currentSchemes['scheme-1'].settings.primary_button_hover_background = '#5A3490';
    currentSchemes['scheme-1'].settings.primary_button_text = '#FFFFFF';
  }
  // Scheme 2: Secondary Brand Colors (White background, Accent buttons)
  if (currentSchemes['scheme-2']) {
    currentSchemes['scheme-2'].settings.background = '#FFFFFF';
    currentSchemes['scheme-2'].settings.primary_button_background = '#F4A261';
    currentSchemes['scheme-2'].settings.primary_button_hover_background = '#e69154';
  }
}

// Update presets if necessary
if (data.presets && data.presets.Horizon && data.presets.Horizon.color_schemes) {
  const presetSchemes = data.presets.Horizon.color_schemes;
  if (presetSchemes['scheme-1']) {
    presetSchemes['scheme-1'].settings.background = '#FDF8F3';
    presetSchemes['scheme-1'].settings.foreground = '#1F1F1F';
    presetSchemes['scheme-1'].settings.foreground_heading = '#111827';
    presetSchemes['scheme-1'].settings.primary_button_background = '#6B3FA0';
    presetSchemes['scheme-1'].settings.primary_button_hover_background = '#5A3490';
    presetSchemes['scheme-1'].settings.primary_button_text = '#FFFFFF';
  }
  if (presetSchemes['scheme-2']) {
    presetSchemes['scheme-2'].settings.background = '#FFFFFF';
    presetSchemes['scheme-2'].settings.primary_button_background = '#F4A261';
    presetSchemes['scheme-2'].settings.primary_button_hover_background = '#e69154';
  }
}

// Fonts
data.current.type_heading_font = 'baloo_2_n7';
data.current.type_body_font = 'nunito_n4';
data.current.button_border_radius_primary = 30; // Rounded buttons
data.current.button_border_radius_secondary = 30;

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Palette updated.');
