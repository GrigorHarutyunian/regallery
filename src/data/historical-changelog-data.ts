export type ChangelogItemType = 'added' | 'improved' | 'fixed' | 'removed' | 'other';

export interface ChangelogItem {
  type: ChangelogItemType;
  text: string;
  raw?: string;
}

export interface ChangelogRelease {
  version: string;
  date: string;
  items: ChangelogItem[];
}

/**
 * Historical releases from v1.20.0 down to v1.0.0.
 * Releases newer than 1.20.0 are grabbed dynamically from WordPress.org.
 */
export const historicalChangelogData: ChangelogRelease[] = [
  {
    "version": "1.20.0",
    "date": "04.05.2026",
    "items": [
      {
        "type": "added",
        "text": "Scroller layout.",
        "raw": "**Added:** Scroller layout."
      },
      {
        "type": "added",
        "text": "Active Drift pre-built template.",
        "raw": "**Added:** Active Drift pre-built template."
      },
      {
        "type": "added",
        "text": "Twin Flow pre-built template.",
        "raw": "**Added:** Twin Flow pre-built template."
      },
      {
        "type": "fixed",
        "text": "Templates issue in Gutenberg.",
        "raw": "**Fixed:** Templates issue in Gutenberg."
      }
    ]
  },
  {
    "version": "1.19.2",
    "date": "29.04.2026",
    "items": [
      {
        "type": "added",
        "text": "Automatic cover generation for uploaded videos when inserting them into the gallery.",
        "raw": "**Added:** Automatic cover generation for uploaded videos when inserting them into the gallery."
      },
      {
        "type": "fixed",
        "text": "Gallery update issue.",
        "raw": "**Fixed:** Gallery update issue."
      }
    ]
  },
  {
    "version": "1.19.1",
    "date": "27.04.2026",
    "items": [
      {
        "type": "added",
        "text": "New tab-based settings navigation for faster access to Gallery, Content, Appearance, Lightbox, Navigation, and Protection options.",
        "raw": "**Added:** New tab-based settings navigation for faster access to Gallery, Content, Appearance, Lightbox, Navigation, and Protection options."
      },
      {
        "type": "improved",
        "text": "Completely redesigned gallery settings interface with a cleaner, modernized UI for a more intuitive editing experience.",
        "raw": "**Improved:** Completely redesigned gallery settings interface with a cleaner, modernized UI for a more intuitive editing experience."
      }
    ]
  },
  {
    "version": "1.19.0",
    "date": "20.04.2026",
    "items": [
      {
        "type": "added",
        "text": "Coverflow layout.",
        "raw": "**Added:** Coverflow layout."
      },
      {
        "type": "added",
        "text": "Soft light hover effect.",
        "raw": "**Added:** Soft light hover effect."
      },
      {
        "type": "added",
        "text": "DepthFlow pre-designed template.",
        "raw": "**Added:** DepthFlow pre-designed template."
      }
    ]
  },
  {
    "version": "1.18.11",
    "date": "16.04.2026",
    "items": [
      {
        "type": "added",
        "text": "Migration from FooGallery, Envira Gallery, Gutenberg Gallery, and Photo Gallery by 10Web.",
        "raw": "**Added:** Migration from FooGallery, Envira Gallery, Gutenberg Gallery, and Photo Gallery by 10Web."
      }
    ]
  },
  {
    "version": "1.18.10",
    "date": "10.04.2026",
    "items": [
      {
        "type": "added",
        "text": "Counter, Share, Download, Zoom, and Fullscreen options to Slider layout.",
        "raw": "**Added:** Counter, Share, Download, Zoom, and Fullscreen options to Slider layout."
      },
      {
        "type": "added",
        "text": "Yoast SEO section in gallery edit page.",
        "raw": "**Added:** Yoast SEO section in gallery edit page."
      },
      {
        "type": "added",
        "text": "Ultimate Showcase pre-built template.",
        "raw": "**Added:** Ultimate Showcase pre-built template."
      },
      {
        "type": "fixed",
        "text": "Broken access control in REST API endpoint allowing unauthorized updates to gallery configuration.",
        "raw": "**Fixed:** Broken access control in REST API endpoint allowing unauthorized updates to gallery configuration."
      },
      {
        "type": "fixed",
        "text": "Demo gallery not importing correctly in Playground.",
        "raw": "**Fixed:** Demo gallery not importing correctly in Playground."
      },
      {
        "type": "fixed",
        "text": "Google Fonts not loading properly in some galleries.",
        "raw": "**Fixed:** Google Fonts not loading properly in some galleries."
      }
    ]
  },
  {
    "version": "1.18.9",
    "date": "06.04.2026",
    "items": [
      {
        "type": "improved",
        "text": "Gallery edit page now deeply adapts to the WordPress admin color scheme.",
        "raw": "**Improved:** Gallery edit page now deeply adapts to the WordPress admin color scheme."
      },
      {
        "type": "other",
        "text": "Updated help modal.",
        "raw": "**Changed:** Updated help modal."
      },
      {
        "type": "fixed",
        "text": "Broken access control issue.",
        "raw": "**Fixed:** Broken access control issue."
      },
      {
        "type": "fixed",
        "text": "Error when retrieving video cover image URL when only a large image is available.",
        "raw": "**Fixed:** Error when retrieving video cover image URL when only a large image is available."
      },
      {
        "type": "fixed",
        "text": "Issue with playing .mov video files in Slider layout and Lightbox.",
        "raw": "**Fixed:** Issue with playing .mov video files in Slider layout and Lightbox."
      },
      {
        "type": "fixed",
        "text": "Minor style issues.",
        "raw": "**Fixed:** Minor style issues."
      }
    ]
  },
  {
    "version": "1.18.8",
    "date": "27.03.2026",
    "items": [
      {
        "type": "fixed",
        "text": "Error when retrieving image URL if no additional image sizes were available (only original).",
        "raw": "**Fixed:** Error when retrieving image URL if no additional image sizes were available (only original)."
      }
    ]
  },
  {
    "version": "1.18.7",
    "date": "25.03.2026",
    "items": [
      {
        "type": "improved",
        "text": "Uses all available WordPress image sizes to load the most appropriate image for each screen and layout.",
        "raw": "**Improved:** Uses all available WordPress image sizes to load the most appropriate image for each screen and layout."
      },
      {
        "type": "improved",
        "text": "Smarter image size selection for better performance.",
        "raw": "**Improved:** Smarter image size selection for better performance."
      },
      {
        "type": "fixed",
        "text": "Caption background issue when overlay text background is set to none in Mosaic, Masonry, and Justified layouts.",
        "raw": "**Fixed:** Caption background issue when overlay text background is set to none in Mosaic, Masonry, and Justified layouts."
      },
      {
        "type": "fixed",
        "text": "Scroll load.",
        "raw": "**Fixed:** Scroll load."
      },
      {
        "type": "fixed",
        "text": "Loading icon positioning.",
        "raw": "**Fixed:** Loading icon positioning."
      }
    ]
  },
  {
    "version": "1.18.6",
    "date": "16.03.2026",
    "items": [
      {
        "type": "added",
        "text": "Possibility to add a button with editable styles to Grid, Mosaic, Masonry, Justified, Slider, Cube, Carousel, and Cards layouts.",
        "raw": "**Added:** Possibility to add a button with editable styles to Grid, Mosaic, Masonry, Justified, Slider, Cube, Carousel, and Cards layouts."
      },
      {
        "type": "added",
        "text": "Button border options for the Blog layout.",
        "raw": "**Added:** Button border options for the Blog layout."
      },
      {
        "type": "fixed",
        "text": "Conflict with certain caching mechanisms.",
        "raw": "**Fixed:** Conflict with certain caching mechanisms."
      },
      {
        "type": "fixed",
        "text": "Play/Pause button display for the Cube layout.",
        "raw": "**Fixed:** Play/Pause button display for the Cube layout."
      }
    ]
  },
  {
    "version": "1.18.5",
    "date": "11.03.2026",
    "items": [
      {
        "type": "added",
        "text": "Ability to set a gallery title when inserting a gallery via the Gutenberg block.",
        "raw": "**Added:** Ability to set a gallery title when inserting a gallery via the Gutenberg block."
      },
      {
        "type": "added",
        "text": "Uniform Grid pre-built template.",
        "raw": "**Added:** Uniform Grid pre-built template."
      },
      {
        "type": "added",
        "text": "Modern Grid pre-built template.",
        "raw": "**Added:** Modern Grid pre-built template."
      },
      {
        "type": "added",
        "text": "Hero Focus pre-built template.",
        "raw": "**Added:** Hero Focus pre-built template."
      },
      {
        "type": "added",
        "text": "Edge-to-Edge Rows pre-built template.",
        "raw": "**Added:** Edge-to-Edge Rows pre-built template."
      },
      {
        "type": "added",
        "text": "Elegant Grid pre-built template.",
        "raw": "**Added:** Elegant Grid pre-built template."
      },
      {
        "type": "added",
        "text": "Studio Layout pre-built template.",
        "raw": "**Added:** Studio Layout pre-built template."
      },
      {
        "type": "added",
        "text": "Simple Slider pre-built template.",
        "raw": "**Added:** Simple Slider pre-built template."
      }
    ]
  },
  {
    "version": "1.18.4",
    "date": "04.03.2026",
    "items": [
      {
        "type": "improved",
        "text": "Redesigned the Templates Library for better usability and navigation.",
        "raw": "**Improved:** Redesigned the Templates Library for better usability and navigation."
      },
      {
        "type": "fixed",
        "text": "A broken access control vulnerability.",
        "raw": "**Fixed:** A broken access control vulnerability."
      },
      {
        "type": "fixed",
        "text": "Minor vulnerabilities.",
        "raw": "**Fixed:** Minor vulnerabilities."
      }
    ]
  },
  {
    "version": "1.18.3",
    "date": "26.02.2026",
    "items": [
      {
        "type": "added",
        "text": "Motion View pre-built template.",
        "raw": "**Added:** Motion View pre-built template."
      },
      {
        "type": "improved",
        "text": "Removed the even-number image count restriction in the Carousel layout.",
        "raw": "**Improved:** Removed the even-number image count restriction in the Carousel layout."
      },
      {
        "type": "fixed",
        "text": "Divi Module rendering order issue.",
        "raw": "**Fixed:** Divi Module rendering order issue."
      },
      {
        "type": "fixed",
        "text": "Save gallery options on publishing post with Gutenberg editor.",
        "raw": "**Fixed:** Save gallery options on publishing post with Gutenberg editor."
      },
      {
        "type": "fixed",
        "text": "Image and video loading animation.",
        "raw": "**Fixed:** Image and video loading animation."
      },
      {
        "type": "fixed",
        "text": "Video hover effect in the Grid layout.",
        "raw": "**Fixed:** Video hover effect in the Grid layout."
      }
    ]
  },
  {
    "version": "1.18.2",
    "date": "23.02.2026",
    "items": [
      {
        "type": "added",
        "text": "Video playback support for Grid, Mosaic, Masonry, and Justified layouts instead of showing video cover.",
        "raw": "**Added:** Video playback support for Grid, Mosaic, Masonry, and Justified layouts instead of showing video cover."
      },
      {
        "type": "added",
        "text": "Possibility to display video cover in Blog, Carousel, Cube, and Cards layouts.",
        "raw": "**Added:** Possibility to display video cover in Blog, Carousel, Cube, and Cards layouts."
      },
      {
        "type": "added",
        "text": "\"Scroll by images count\" option to the Carousel layout.",
        "raw": "**Added:** \"Scroll by images count\" option to the Carousel layout."
      },
      {
        "type": "added",
        "text": "Possibility to hide pagination with specified images count.",
        "raw": "**Added:** Possibility to hide pagination with specified images count."
      },
      {
        "type": "added",
        "text": "Liquid Glass pre-built template.",
        "raw": "**Added:** Liquid Glass pre-built template."
      },
      {
        "type": "improved",
        "text": "Paged pagination design on mobile devices.",
        "raw": "**Improved:** Paged pagination design on mobile devices."
      },
      {
        "type": "fixed",
        "text": "Pagination issue in the Blog layout.",
        "raw": "**Fixed:** Pagination issue in the Blog layout."
      }
    ]
  },
  {
    "version": "1.18.1",
    "date": "16.02.2026",
    "items": [
      {
        "type": "added",
        "text": "Right click protection.",
        "raw": "**Added:** Right click protection."
      },
      {
        "type": "added",
        "text": "Product Cards pre-built template.",
        "raw": "**Added:** Product Cards pre-built template."
      },
      {
        "type": "added",
        "text": "Portfolio pre-built template.",
        "raw": "**Added:** Portfolio pre-built template."
      },
      {
        "type": "added",
        "text": "Service Blocks pre-built template.",
        "raw": "**Added:** Service Blocks pre-built template."
      },
      {
        "type": "added",
        "text": "Detail Grid pre-built template.",
        "raw": "**Added:** Detail Grid pre-built template."
      },
      {
        "type": "added",
        "text": "CTA Cards pre-built template.",
        "raw": "**Added:** CTA Cards pre-built template."
      },
      {
        "type": "fixed",
        "text": "Lightbox no longer scrolls to the top on close.",
        "raw": "**Fixed:** Lightbox no longer scrolls to the top on close."
      },
      {
        "type": "fixed",
        "text": "Number input with empty value now saves correctly.",
        "raw": "**Fixed:** Number input with empty value now saves correctly."
      },
      {
        "type": "fixed",
        "text": "Texts no longer disappear when changing hover effects.",
        "raw": "**Fixed:** Texts no longer disappear when changing hover effects."
      }
    ]
  },
  {
    "version": "1.18.0",
    "date": "09.02.2026",
    "items": [
      {
        "type": "added",
        "text": "Dots as navigation with the ability to change their position, color, and size on Cube, Carousel, and Cards layouts.",
        "raw": "**Added:** Dots as navigation with the ability to change their position, color, and size on Cube, Carousel, and Cards layouts."
      },
      {
        "type": "added",
        "text": "Option to disable navigation on Cube, Carousel, and Cards layouts.",
        "raw": "**Added:** Option to disable navigation on Cube, Carousel, and Cards layouts."
      },
      {
        "type": "added",
        "text": "Option to change navigation color on Cube, Carousel, and Cards layouts.",
        "raw": "**Added:** Option to change navigation color on Cube, Carousel, and Cards layouts."
      },
      {
        "type": "added",
        "text": "Option to hide video controls on Cube, Carousel, and Cards layouts.",
        "raw": "**Added:** Option to hide video controls on Cube, Carousel, and Cards layouts."
      },
      {
        "type": "added",
        "text": "Animation speed option for slide transitions on Cube, Carousel, and Cards layouts.",
        "raw": "**Added:** Animation speed option for slide transitions on Cube, Carousel, and Cards layouts."
      },
      {
        "type": "improved",
        "text": "Carousel layout on mobile devices.",
        "raw": "**Improved:** Carousel layout on mobile devices."
      },
      {
        "type": "fixed",
        "text": "Autoplay of visible videos in Carousel layout.",
        "raw": "**Fixed:** Autoplay of visible videos in Carousel layout."
      },
      {
        "type": "fixed",
        "text": "Automatic translation of Alt texts with WPML.",
        "raw": "**Fixed:** Automatic translation of Alt texts with WPML."
      },
      {
        "type": "fixed",
        "text": "Prevent page from scrolling to top when closing the lightbox.",
        "raw": "**Fixed:** Prevent page from scrolling to top when closing the lightbox."
      },
      {
        "type": "fixed",
        "text": "Video titles on Cube, Carousel, Cards layouts with position top, center, bottom.",
        "raw": "**Fixed:** Video titles on Cube, Carousel, Cards layouts with position top, center, bottom."
      }
    ]
  },
  {
    "version": "1.17.23",
    "date": "02.02.2026",
    "items": [
      {
        "type": "added",
        "text": "Swipeflow pre-built template.",
        "raw": "**Added:** Swipeflow pre-built template."
      },
      {
        "type": "added",
        "text": "Travel Agency pre-built template.",
        "raw": "**Added:** Travel Agency pre-built template."
      },
      {
        "type": "added",
        "text": "Video Cube pre-built template.",
        "raw": "**Added:** Video Cube pre-built template."
      },
      {
        "type": "added",
        "text": "Advertisement pre-built template.",
        "raw": "**Added:** Advertisement pre-built template."
      },
      {
        "type": "added",
        "text": "Border Hover pre-built template.",
        "raw": "**Added:** Border Hover pre-built template."
      },
      {
        "type": "added",
        "text": "Above/Below options for Title and Caption positioning in Cube, Cards, and Carousel layouts.",
        "raw": "**Added:** Above/Below options for Title and Caption positioning in Cube, Cards, and Carousel layouts."
      },
      {
        "type": "improved",
        "text": "Carousel layout responsiveness.",
        "raw": "**Improved:** Carousel layout responsiveness."
      },
      {
        "type": "improved",
        "text": "Text visibility on images.",
        "raw": "**Improved:** Text visibility on images."
      },
      {
        "type": "other",
        "text": "Text default options.",
        "raw": "**Changed:** Text default options."
      },
      {
        "type": "fixed",
        "text": "Lightbox opening issue in Gutenberg editor when switching to mobile or tablet view.",
        "raw": "**Fixed:** Lightbox opening issue in Gutenberg editor when switching to mobile or tablet view."
      },
      {
        "type": "fixed",
        "text": "Load required JS/CSS files only on pages containing galleries.",
        "raw": "**Fixed:** Load required JS/CSS files only on pages containing galleries."
      }
    ]
  },
  {
    "version": "1.17.22",
    "date": "27.01.2026",
    "items": [
      {
        "type": "added",
        "text": "Titles and captions support for Cube, Cards, and Carousel layouts.",
        "raw": "**Added:** Titles and captions support for Cube, Cards, and Carousel layouts."
      },
      {
        "type": "fixed",
        "text": "Gallery block not initializing correctly in Gutenberg when the control panel was closed.",
        "raw": "**Fixed:** Gallery block not initializing correctly in Gutenberg when the control panel was closed."
      },
      {
        "type": "fixed",
        "text": "Gallery preview updating when switching between Desktop, Tablet, and Mobile in Gutenberg.",
        "raw": "**Fixed:** Gallery preview updating when switching between Desktop, Tablet, and Mobile in Gutenberg."
      },
      {
        "type": "fixed",
        "text": "Grid layout style conflicts with Divi.",
        "raw": "**Fixed:** Grid layout style conflicts with Divi."
      }
    ]
  },
  {
    "version": "1.17.21",
    "date": "23.01.2026",
    "items": [
      {
        "type": "added",
        "text": "View demo and compare features links to the upgrade popup.",
        "raw": "**Added:** View demo and compare features links to the upgrade popup."
      },
      {
        "type": "fixed",
        "text": "Ability to select private and protected galleries in builders.",
        "raw": "**Fixed:** Ability to select private and protected galleries in builders."
      },
      {
        "type": "fixed",
        "text": "Gutenberg block duplicate and copy issues.",
        "raw": "**Fixed:** Gutenberg block duplicate and copy issues."
      }
    ]
  },
  {
    "version": "1.17.20",
    "date": "19.01.2026",
    "items": [
      {
        "type": "added",
        "text": "Widgets to the WordPress dashboard.",
        "raw": "**Added:** Widgets to the WordPress dashboard."
      },
      {
        "type": "added",
        "text": "Possibility to import a demo gallery.",
        "raw": "**Added:** Possibility to import a demo gallery."
      },
      {
        "type": "fixed",
        "text": "Gutenberg block behavior when used as a widget.",
        "raw": "**Fixed:** Gutenberg block behavior when used as a widget."
      }
    ]
  },
  {
    "version": "1.17.19",
    "date": "11.01.2026",
    "items": [
      {
        "type": "improved",
        "text": "Hardened request handling and permissions validation.",
        "raw": "**Improved:** Hardened request handling and permissions validation."
      },
      {
        "type": "fixed",
        "text": "Text position (Above/Below) not working when the Description source is set to a value other than “Description” in Slider and Lightbox.",
        "raw": "**Fixed:** Text position (Above/Below) not working when the Description source is set to a value other than “Description” in Slider and Lightbox."
      },
      {
        "type": "fixed",
        "text": "Unwanted spacing between images in Slider and Lightbox.",
        "raw": "**Fixed:** Unwanted spacing between images in Slider and Lightbox."
      }
    ]
  },
  {
    "version": "1.17.18",
    "date": "07.01.2026",
    "items": [
      {
        "type": "added",
        "text": "Ability to book a call with a gallery expert.",
        "raw": "**Added:** Ability to book a call with a gallery expert."
      },
      {
        "type": "improved",
        "text": "Prevent HEIC image uploads when the Imagick PHP extension is missing to avoid broken images.",
        "raw": "**Improved:** Prevent HEIC image uploads when the Imagick PHP extension is missing to avoid broken images."
      },
      {
        "type": "fixed",
        "text": "Carousel issue when the configured image count exceeds the actual number of images.",
        "raw": "**Fixed:** Carousel issue when the configured image count exceeds the actual number of images."
      }
    ]
  },
  {
    "version": "1.17.17",
    "date": "03.01.2026",
    "items": [
      {
        "type": "added",
        "text": "Drag-and-drop support for the Carousel layout.",
        "raw": "**Added:** Drag-and-drop support for the Carousel layout."
      },
      {
        "type": "added",
        "text": "Image hover effects for Card, Carousel, and Cube layouts.",
        "raw": "**Added:** Image hover effects for Card, Carousel, and Cube layouts."
      },
      {
        "type": "improved",
        "text": "Search now supports multiple keywords with whole-word matching.",
        "raw": "**Improved:** Search now supports multiple keywords with whole-word matching."
      },
      {
        "type": "fixed",
        "text": "White labeling functionality.",
        "raw": "**Fixed:** White labeling functionality."
      }
    ]
  },
  {
    "version": "1.17.16",
    "date": "26.12.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Warnings connected with PHP v8.2.",
        "raw": "**Fixed:** Warnings connected with PHP v8.2."
      },
      {
        "type": "fixed",
        "text": "My templates issue for non-public galleries.",
        "raw": "**Fixed:** My templates issue for non-public galleries."
      }
    ]
  },
  {
    "version": "1.17.15",
    "date": "18.12.2025",
    "items": [
      {
        "type": "improved",
        "text": "Updated plugin branding to be consistent across the plugin header, and description.",
        "raw": "**Improved:** Updated plugin branding to be consistent across the plugin header, and description."
      },
      {
        "type": "improved",
        "text": "Sanitization and validation of inputs.",
        "raw": "**Improved:** Sanitization and validation of inputs."
      },
      {
        "type": "improved",
        "text": "Translators' comments for strings with placeholders to improve localization quality.",
        "raw": "**Improved:** Translators' comments for strings with placeholders to improve localization quality."
      },
      {
        "type": "fixed",
        "text": "Removed external emoji image dependency to comply with WordPress.org asset guidelines.",
        "raw": "**Fixed:** Removed external emoji image dependency to comply with WordPress.org asset guidelines."
      },
      {
        "type": "fixed",
        "text": "Corrected redirect handling using recommended safe redirect functions.",
        "raw": "**Fixed:** Corrected redirect handling using recommended safe redirect functions."
      },
      {
        "type": "fixed",
        "text": "Resolved timezone-related date handling warning.",
        "raw": "**Fixed:** Resolved timezone-related date handling warning."
      }
    ]
  },
  {
    "version": "1.17.14",
    "date": "16.12.2025",
    "items": [
      {
        "type": "improved",
        "text": "Import a complete example gallery with images in WordPress Playground.",
        "raw": "**Improved:** Import a complete example gallery with images in WordPress Playground."
      },
      {
        "type": "fixed",
        "text": "Conflict with caching plugins.",
        "raw": "**Fixed:** Conflict with caching plugins."
      },
      {
        "type": "fixed",
        "text": "AI highlighter text and positioning.",
        "raw": "**Fixed:** AI highlighter text and positioning."
      }
    ]
  },
  {
    "version": "1.17.13",
    "date": "13.12.2025",
    "items": [
      {
        "type": "improved",
        "text": "Options section is now displayed outside the gallery container in the Gutenberg editor.",
        "raw": "**Improved:** Options section is now displayed outside the gallery container in the Gutenberg editor."
      },
      {
        "type": "other",
        "text": "Upgrade buttons.",
        "raw": "**Changed:** Upgrade buttons."
      },
      {
        "type": "fixed",
        "text": "Issue with the Divi Builder.",
        "raw": "**Fixed:** Issue with the Divi Builder."
      }
    ]
  },
  {
    "version": "1.17.12",
    "date": "09.12.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Options section responsiveness.",
        "raw": "**Fixed:** Options section responsiveness."
      }
    ]
  },
  {
    "version": "1.17.11",
    "date": "08.12.2025",
    "items": [
      {
        "type": "added",
        "text": "Centered Caption pre-built template.",
        "raw": "**Added:** Centered Caption pre-built template."
      },
      {
        "type": "other",
        "text": "Options section displayed separately from the preview.",
        "raw": "**Changed:** Options section displayed separately from the preview."
      },
      {
        "type": "fixed",
        "text": "JavaScript error on first load in the admin area.",
        "raw": "**Fixed:** JavaScript error on first load in the admin area."
      }
    ]
  },
  {
    "version": "1.17.10",
    "date": "29.11.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Image upload issue.",
        "raw": "**Fixed:** Image upload issue."
      }
    ]
  },
  {
    "version": "1.17.9",
    "date": "28.11.2025",
    "items": [
      {
        "type": "added",
        "text": "Soft Hover pre-built template.",
        "raw": "**Added:** Soft Hover pre-built template."
      },
      {
        "type": "added",
        "text": "Overlay Fullscreen Icon hover effects.",
        "raw": "**Added:** Overlay Fullscreen Icon hover effects."
      },
      {
        "type": "added",
        "text": "Get Discount button to the plugins list.",
        "raw": "**Added:** Get Discount button to the plugins list."
      },
      {
        "type": "fixed",
        "text": "Save options and Reset buttons styling.",
        "raw": "**Fixed:** Save options and Reset buttons styling."
      }
    ]
  },
  {
    "version": "1.17.8",
    "date": "24.11.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Responsiveness of the Options section.",
        "raw": "**Fixed:** Responsiveness of the Options section."
      },
      {
        "type": "fixed",
        "text": "Layout issues in Mosaic, Masonry, and Justified views when used with Elementor on mobile.",
        "raw": "**Fixed:** Layout issues in Mosaic, Masonry, and Justified views when used with Elementor on mobile."
      },
      {
        "type": "fixed",
        "text": "The overlay icon transition in Mosaic, Masonry, and Justified views.",
        "raw": "**Fixed:** The overlay icon transition in Mosaic, Masonry, and Justified views."
      }
    ]
  },
  {
    "version": "1.17.7",
    "date": "17.11.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Pagination button height conflicts with third-party themes and plugins.",
        "raw": "**Fixed:** Pagination button height conflicts with third-party themes and plugins."
      },
      {
        "type": "fixed",
        "text": "Text line-height issue in the lightbox and Slideshow views.",
        "raw": "**Fixed:** Text line-height issue in the lightbox and Slideshow views."
      }
    ]
  },
  {
    "version": "1.17.6",
    "date": "11.11.2025",
    "items": [
      {
        "type": "added",
        "text": "White labeling functionality.",
        "raw": "**Added:** White labeling functionality."
      }
    ]
  },
  {
    "version": "1.17.5",
    "date": "03.11.2025",
    "items": [
      {
        "type": "added",
        "text": "Glide Captions pre-built template.",
        "raw": "**Added:** Glide Captions pre-built template."
      },
      {
        "type": "added",
        "text": "Text background and Invert color options to Slideshow view and Lightbox.",
        "raw": "**Added:** Text background and Invert color options to Slideshow view and Lightbox."
      }
    ]
  },
  {
    "version": "1.17.4",
    "date": "28.10.2025",
    "items": [
      {
        "type": "added",
        "text": "Smooth text transitions.",
        "raw": "**Added:** Smooth text transitions."
      },
      {
        "type": "fixed",
        "text": "Thumbnail layout issue when column count is set to 1 and \"Fill container\" is enabled.",
        "raw": "**Fixed:** Thumbnail layout issue when column count is set to 1 and \"Fill container\" is enabled."
      }
    ]
  },
  {
    "version": "1.17.3",
    "date": "22.10.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Error in builders containing a gallery.",
        "raw": "**Fixed:** Error in builders containing a gallery."
      },
      {
        "type": "fixed",
        "text": "Slide hover effect issue on small screens.",
        "raw": "**Fixed:** Slide hover effect issue on small screens."
      }
    ]
  },
  {
    "version": "1.17.2",
    "date": "20.10.2025",
    "items": [
      {
        "type": "added",
        "text": "Gallery items filter functionality.",
        "raw": "**Added:** Gallery items filter functionality."
      },
      {
        "type": "improved",
        "text": "Section headers for better visibility in options.",
        "raw": "**Improved:** Section headers for better visibility in options."
      },
      {
        "type": "fixed",
        "text": "Removed unnecessary frontend call.",
        "raw": "**Fixed:** Removed unnecessary frontend call."
      }
    ]
  },
  {
    "version": "1.17.1",
    "date": "14.10.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Drag and drop for video slides in Carousel, Cards, and Cube views.",
        "raw": "**Fixed:** Drag and drop for video slides in Carousel, Cards, and Cube views."
      },
      {
        "type": "fixed",
        "text": "Videos now automatically stop playing when changing slides in Carousel, Cards, and Cube views.",
        "raw": "**Fixed:** Videos now automatically stop playing when changing slides in Carousel, Cards, and Cube views."
      },
      {
        "type": "fixed",
        "text": "Swiper loop warning in Carousel view.",
        "raw": "**Fixed:** Swiper loop warning in Carousel view."
      },
      {
        "type": "fixed",
        "text": "Text padding with rounded borders in Thumbnails view.",
        "raw": "**Fixed:** Text padding with rounded borders in Thumbnails view."
      }
    ]
  },
  {
    "version": "1.17.0",
    "date": "06.10.2025",
    "items": [
      {
        "type": "added",
        "text": "Possibility to display all gallery images together.",
        "raw": "**Added:** Possibility to display all gallery images together."
      },
      {
        "type": "added",
        "text": "Option to add custom CSS to the gallery.",
        "raw": "**Added:** Option to add custom CSS to the gallery."
      },
      {
        "type": "added",
        "text": "Ability to apply a non-destructive watermark to images.",
        "raw": "**Added:** Ability to apply a non-destructive watermark to images."
      },
      {
        "type": "added",
        "text": "Options to specify watermark position, size, and transparency.",
        "raw": "**Added:** Options to specify watermark position, size, and transparency."
      },
      {
        "type": "fixed",
        "text": "Changes to options not reflected after clicking the gallery Update button.",
        "raw": "**Fixed:** Changes to options not reflected after clicking the gallery Update button."
      },
      {
        "type": "fixed",
        "text": "Thumbnails view breaking when only the caption is enabled and its position is set to above or below.",
        "raw": "**Fixed:** Thumbnails view breaking when only the caption is enabled and its position is set to above or below."
      },
      {
        "type": "fixed",
        "text": "Caption not visible when the title and caption have the same position and the title is disabled.",
        "raw": "**Fixed:** Caption not visible when the title and caption have the same position and the title is disabled."
      },
      {
        "type": "fixed",
        "text": "Fonts list issue in the Divi builder.",
        "raw": "**Fixed:** Fonts list issue in the Divi builder."
      },
      {
        "type": "fixed",
        "text": "Missing pointer cursor for item titles with the Image Click action enabled.",
        "raw": "**Fixed:** Missing pointer cursor for item titles with the Image Click action enabled."
      },
      {
        "type": "fixed",
        "text": "Cursor pointer for titles of item with set Image click.",
        "raw": "**Fixed:** Cursor pointer for titles of item with set Image click."
      },
      {
        "type": "fixed",
        "text": "Overlay text background not removed when its option value is empty.",
        "raw": "**Fixed:** Overlay text background not removed when its option value is empty."
      }
    ]
  },
  {
    "version": "1.16.6",
    "date": "29.09.2025",
    "items": [
      {
        "type": "added",
        "text": "Options for item border width, color, and background color.",
        "raw": "**Added:** Options for item border width, color, and background color."
      },
      {
        "type": "added",
        "text": "Overlay text background option to customize the background color of text displayed on images.",
        "raw": "**Added:** Overlay text background option to customize the background color of text displayed on images."
      },
      {
        "type": "added",
        "text": "Invert color option to improve text visibility on images.",
        "raw": "**Added:** Invert color option to improve text visibility on images."
      },
      {
        "type": "improved",
        "text": "Advanced options section for better usability.",
        "raw": "**Improved:** Advanced options section for better usability."
      },
      {
        "type": "fixed",
        "text": "Responsive padding issue for images in the Lightbox.",
        "raw": "**Fixed:** Responsive padding issue for images in the Lightbox."
      },
      {
        "type": "fixed",
        "text": "Empty fonts list and option saving issues in the Elementor editor.",
        "raw": "**Fixed:** Empty fonts list and option saving issues in the Elementor editor."
      }
    ]
  },
  {
    "version": "1.16.5",
    "date": "24.09.2025",
    "items": [
      {
        "type": "added",
        "text": "Ability to reuse your custom templates.",
        "raw": "**Added:** Ability to reuse your custom templates."
      }
    ]
  },
  {
    "version": "1.16.4",
    "date": "17.09.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Video dimensions in Cube, Carousel, Cards views.",
        "raw": "**Fixed:** Video dimensions in Cube, Carousel, Cards views."
      },
      {
        "type": "fixed",
        "text": "Video playback issues in Cube, Carousel, and Cards views on Safari.",
        "raw": "**Fixed:** Video playback issues in Cube, Carousel, and Cards views on Safari."
      }
    ]
  },
  {
    "version": "1.16.3",
    "date": "04.09.2025",
    "items": [
      {
        "type": "improved",
        "text": "Removed the \"None\" option from Text Position in Slideshow and Lightbox. Now, item title, caption, and description can be enabled/disabled separately.",
        "raw": "**Improved:** Removed the \"None\" option from Text Position in Slideshow and Lightbox. Now, item title, caption, and description can be enabled/disabled separately."
      },
      {
        "type": "fixed",
        "text": "Action URL not working with special characters in the URL.",
        "raw": "**Fixed:** Action URL not working with special characters in the URL."
      },
      {
        "type": "fixed",
        "text": "Border radius in Thumbnails view.",
        "raw": "**Fixed:** Border radius in Thumbnails view."
      }
    ]
  },
  {
    "version": "1.16.2",
    "date": "28.08.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Warning message displayed on the edit page.",
        "raw": "**Fixed:** Warning message displayed on the edit page."
      }
    ]
  },
  {
    "version": "1.16.1",
    "date": "27.08.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Warning message appearing on gallery pages.",
        "raw": "**Fixed:** Warning message appearing on gallery pages."
      }
    ]
  },
  {
    "version": "1.16.0",
    "date": "27.08.2025",
    "items": [
      {
        "type": "added",
        "text": "Fill container option in Thumbnails view: thumbnails now automatically resize by aspect ratio to fully fill the container.",
        "raw": "**Added:** Fill container option in Thumbnails view: thumbnails now automatically resize by aspect ratio to fully fill the container."
      },
      {
        "type": "added",
        "text": "Option to display item descriptions in Thumbnails view.",
        "raw": "**Added:** Option to display item descriptions in Thumbnails view."
      },
      {
        "type": "added",
        "text": "Option to show/hide item captions independently of item titles.",
        "raw": "**Added:** Option to show/hide item captions independently of item titles."
      },
      {
        "type": "added",
        "text": "Separate settings section for Title & Metadata.",
        "raw": "**Added:** Separate settings section for Title & Metadata."
      },
      {
        "type": "added",
        "text": "Option to place item title and item caption above the image.",
        "raw": "**Added:** Option to place item title and item caption above the image."
      },
      {
        "type": "added",
        "text": "Option to set Item URL or WooCommerce product checkout URL as the source for buttons in Blog view.",
        "raw": "**Added:** Option to set Item URL or WooCommerce product checkout URL as the source for buttons in Blog view."
      },
      {
        "type": "fixed",
        "text": "Styling of the error messages.",
        "raw": "**Fixed:** Styling of the error messages."
      }
    ]
  },
  {
    "version": "1.15.11",
    "date": "18.08.2025",
    "items": [
      {
        "type": "added",
        "text": "Option to use image author, creation date, and EXIF data as sources for title, description, and caption.",
        "raw": "**Added:** Option to use image author, creation date, and EXIF data as sources for title, description, and caption."
      },
      {
        "type": "added",
        "text": "Option to set Item URL or WooCommerce product checkout URL as the source for image click action.",
        "raw": "**Added:** Option to set Item URL or WooCommerce product checkout URL as the source for image click action."
      },
      {
        "type": "added",
        "text": "Options to customize pagination buttons border styles.",
        "raw": "**Added:** Options to customize pagination buttons border styles."
      },
      {
        "type": "added",
        "text": "Option to adjust pagination buttons text size.",
        "raw": "**Added:** Option to adjust pagination buttons text size."
      },
      {
        "type": "added",
        "text": "Option to add custom CSS classes to pagination buttons.",
        "raw": "**Added:** Option to add custom CSS classes to pagination buttons."
      },
      {
        "type": "added",
        "text": "Option to change the \"Load more\" button text.",
        "raw": "**Added:** Option to change the \"Load more\" button text."
      },
      {
        "type": "improved",
        "text": "Redirect to the Galleries page after activation.",
        "raw": "**Improved:** Redirect to the Galleries page after activation."
      },
      {
        "type": "improved",
        "text": "Default values for new galleries.",
        "raw": "**Improved:** Default values for new galleries."
      },
      {
        "type": "fixed",
        "text": "Title spacing issue with the button in Blog view.",
        "raw": "**Fixed:** Title spacing issue with the button in Blog view."
      }
    ]
  },
  {
    "version": "1.15.10",
    "date": "13.08.2025",
    "items": [
      {
        "type": "added",
        "text": "Option to enable image counter in the lightbox.",
        "raw": "**Added:** Option to enable image counter in the lightbox."
      }
    ]
  },
  {
    "version": "1.15.9",
    "date": "04.08.2025",
    "items": [
      {
        "type": "added",
        "text": "Products pre-built template.",
        "raw": "**Added:** Products pre-built template."
      },
      {
        "type": "fixed",
        "text": "Title spacing issue with rounded images in Mosaic, Masonry, and Justified layouts.",
        "raw": "**Fixed:** Title spacing issue with rounded images in Mosaic, Masonry, and Justified layouts."
      },
      {
        "type": "fixed",
        "text": "Font family setting had no effect on captions.",
        "raw": "**Fixed:** Font family setting had no effect on captions."
      }
    ]
  },
  {
    "version": "1.15.8",
    "date": "28.07.2025",
    "items": [
      {
        "type": "added",
        "text": "Option to display image caption separately.",
        "raw": "**Added:** Option to display image caption separately."
      },
      {
        "type": "added",
        "text": "Option to set WooCommerce product price as a source for title, description, and caption.",
        "raw": "**Added:** Option to set WooCommerce product price as a source for title, description, and caption."
      },
      {
        "type": "added",
        "text": "Deep linking support for lightbox images.",
        "raw": "**Added:** Deep linking support for lightbox images."
      },
      {
        "type": "added",
        "text": "Option to enable sharing functionality within the lightbox.",
        "raw": "**Added:** Option to enable sharing functionality within the lightbox."
      }
    ]
  },
  {
    "version": "1.15.7",
    "date": "22.07.2025",
    "items": [
      {
        "type": "added",
        "text": "Possibility to generate image caption with AI based on the image title.",
        "raw": "**Added:** Possibility to generate image caption with AI based on the image title."
      },
      {
        "type": "fixed",
        "text": "Disabled pointer cursor for non-clickable images in Thumbnail view.",
        "raw": "**Fixed:** Disabled pointer cursor for non-clickable images in Thumbnail view."
      }
    ]
  },
  {
    "version": "1.15.6",
    "date": "15.07.2025",
    "items": [
      {
        "type": "added",
        "text": "Ability to choose the source of Title and Description.",
        "raw": "**Added:** Ability to choose the source of Title and Description."
      }
    ]
  },
  {
    "version": "1.15.5",
    "date": "08.07.2025",
    "items": [
      {
        "type": "added",
        "text": "Team pre-built template.",
        "raw": "**Added:** Team pre-built template."
      },
      {
        "type": "fixed",
        "text": "Loading icon spacing.",
        "raw": "**Fixed:** Loading icon spacing."
      }
    ]
  },
  {
    "version": "1.15.4",
    "date": "30.06.2025",
    "items": [
      {
        "type": "added",
        "text": "Bricks Builder element for Re Gallery.",
        "raw": "**Added:** Bricks Builder element for Re Gallery."
      },
      {
        "type": "fixed",
        "text": "Long titles and descriptions not displaying correctly in the Overlay Slideshow template.",
        "raw": "**Fixed:** Long titles and descriptions not displaying correctly in the Overlay Slideshow template."
      }
    ]
  },
  {
    "version": "1.15.3",
    "date": "24.06.2025",
    "items": [
      {
        "type": "added",
        "text": "Beaver Builder module for Re Gallery.",
        "raw": "**Added:** Beaver Builder module for Re Gallery."
      }
    ]
  },
  {
    "version": "1.15.2",
    "date": "18.06.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Live Preview on WP.org.",
        "raw": "**Fixed:** Live Preview on WP.org."
      },
      {
        "type": "fixed",
        "text": "Issue with filmstrip image covers not displaying correctly in Slideshow and Lightbox when using Elementor.",
        "raw": "**Fixed:** Issue with filmstrip image covers not displaying correctly in Slideshow and Lightbox when using Elementor."
      }
    ]
  },
  {
    "version": "1.15.1",
    "date": "05.06.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Warning when images do not exist.",
        "raw": "**Fixed:** Warning when images do not exist."
      },
      {
        "type": "fixed",
        "text": "Prevent page from scrolling to top when closing the lightbox.",
        "raw": "**Fixed:** Prevent page from scrolling to top when closing the lightbox."
      }
    ]
  },
  {
    "version": "1.15.0",
    "date": "29.05.2025",
    "items": [
      {
        "type": "added",
        "text": "Justified view.",
        "raw": "**Added:** Justified view."
      },
      {
        "type": "added",
        "text": "Smart Rows pre-built template.",
        "raw": "**Added:** Smart Rows pre-built template."
      },
      {
        "type": "added",
        "text": "Admin Help icon with \"Contact us\" popup.",
        "raw": "**Added:** Admin Help icon with \"Contact us\" popup."
      },
      {
        "type": "fixed",
        "text": "Unwanted black overlay appearing on page load.",
        "raw": "**Fixed:** Unwanted black overlay appearing on page load."
      },
      {
        "type": "fixed",
        "text": "Page scroll with opened lightbox in some cases.",
        "raw": "**Fixed:** Page scroll with opened lightbox in some cases."
      },
      {
        "type": "fixed",
        "text": "Lightbox overlay misalignment when lightbox width is not full screen.",
        "raw": "**Fixed:** Lightbox overlay misalignment when lightbox width is not full screen."
      },
      {
        "type": "fixed",
        "text": "Inconsistent font size for ellipsis in image titles.",
        "raw": "**Fixed:** Inconsistent font size for ellipsis in image titles."
      }
    ]
  },
  {
    "version": "1.14.0",
    "date": "20.05.2025",
    "items": [
      {
        "type": "added",
        "text": "Possibility to generate image title with AI based on the image.",
        "raw": "**Added:** Possibility to generate image title with AI based on the image."
      },
      {
        "type": "added",
        "text": "WooCommerce integration with the ability to add products to the gallery.",
        "raw": "**Added:** WooCommerce integration with the ability to add products to the gallery."
      },
      {
        "type": "added",
        "text": "WPBakery Page Builder element for Re Gallery.",
        "raw": "**Added:** WPBakery Page Builder element for Re Gallery."
      },
      {
        "type": "added",
        "text": "Option to enable image title and description separately in Slideshow view.",
        "raw": "**Added:** Option to enable image title and description separately in Slideshow view."
      },
      {
        "type": "added",
        "text": "Font size and alignment options for title and description in Slideshow view.",
        "raw": "**Added:** Font size and alignment options for title and description in Slideshow view."
      },
      {
        "type": "added",
        "text": "Description length control for Slideshow view.",
        "raw": "**Added:** Description length control for Slideshow view."
      },
      {
        "type": "added",
        "text": "Overlay Cart Icon and Plus Icon hover effects.",
        "raw": "**Added:** Overlay Cart Icon and Plus Icon hover effects."
      },
      {
        "type": "added",
        "text": "Image load animation.",
        "raw": "**Added:** Image load animation."
      },
      {
        "type": "added",
        "text": "Ability to close the lightbox by clicking on empty areas.",
        "raw": "**Added:** Ability to close the lightbox by clicking on empty areas."
      },
      {
        "type": "fixed",
        "text": "Preview reloads correctly after image metadata is updated.",
        "raw": "**Fixed:** Preview reloads correctly after image metadata is updated."
      }
    ]
  },
  {
    "version": "1.13.0",
    "date": "07.05.2025",
    "items": [
      {
        "type": "added",
        "text": "Possibility to generate image description with AI based on the image title.",
        "raw": "**Added:** Possibility to generate image description with AI based on the image title."
      },
      {
        "type": "added",
        "text": "Possibility to generate image alt text with AI based on the image title for improved SEO.",
        "raw": "**Added:** Possibility to generate image alt text with AI based on the image title for improved SEO."
      },
      {
        "type": "added",
        "text": "Full cover image option for Slideshow view.",
        "raw": "**Added:** Full cover image option for Slideshow view."
      },
      {
        "type": "added",
        "text": "Option to hide gallery settings in the Gutenberg editor.",
        "raw": "**Added:** Option to hide gallery settings in the Gutenberg editor."
      },
      {
        "type": "fixed",
        "text": "Options reset issue.",
        "raw": "**Fixed:** Options reset issue."
      },
      {
        "type": "fixed",
        "text": "Use post excerpt as image description (if available) for dynamic posts.",
        "raw": "**Fixed:** Use post excerpt as image description (if available) for dynamic posts."
      },
      {
        "type": "fixed",
        "text": "Video icon position when lightbox is disabled.",
        "raw": "**Fixed:** Video icon position when lightbox is disabled."
      },
      {
        "type": "fixed",
        "text": "Certain options not functioning when \"Image Click\" is set to \"None\" in Mosaic and Masonry views.",
        "raw": "**Fixed:** Certain options not functioning when \"Image Click\" is set to \"None\" in Mosaic and Masonry views."
      }
    ]
  },
  {
    "version": "1.12.3",
    "date": "22.04.2025",
    "items": [
      {
        "type": "added",
        "text": "Gallery duplication functionality.",
        "raw": "**Added:** Gallery duplication functionality."
      },
      {
        "type": "added",
        "text": "New Overlay icon option for Hover effect.",
        "raw": "**Added:** New Overlay icon option for Hover effect."
      },
      {
        "type": "added",
        "text": "Simple Prism pre-built template.",
        "raw": "**Added:** Simple Prism pre-built template."
      },
      {
        "type": "fixed",
        "text": "Issue where not all images loaded when pagination was disabled.",
        "raw": "**Fixed:** Issue where not all images loaded when pagination was disabled."
      },
      {
        "type": "fixed",
        "text": "Issue where videos in Blog view were not playing correctly on Safari.",
        "raw": "**Fixed:** Issue where videos in Blog view were not playing correctly on Safari."
      },
      {
        "type": "fixed",
        "text": "Prevented unintended onload animations with enabled Hover effects.",
        "raw": "**Fixed:** Prevented unintended onload animations with enabled Hover effects."
      },
      {
        "type": "fixed",
        "text": "Spacing issues in Prism Pattern, PolyGrid, and Hive Lens templates.",
        "raw": "**Fixed:** Spacing issues in Prism Pattern, PolyGrid, and Hive Lens templates."
      }
    ]
  },
  {
    "version": "1.12.2",
    "date": "16.04.2025",
    "items": [
      {
        "type": "added",
        "text": "Ability to dynamically add posts and pages.",
        "raw": "**Added:** Ability to dynamically add posts and pages."
      },
      {
        "type": "improved",
        "text": "Image selection in the media library now allows multiple selections without holding down the Control key.",
        "raw": "**Improved:** Image selection in the media library now allows multiple selections without holding down the Control key."
      },
      {
        "type": "fixed",
        "text": "Resolved an issue where the lightbox opened the incorrect image when pagination was enabled and the gallery order was customized.",
        "raw": "**Fixed:** Resolved an issue where the lightbox opened the incorrect image when pagination was enabled and the gallery order was customized."
      },
      {
        "type": "fixed",
        "text": "Wrong image opening during editing image info.",
        "raw": "**Fixed:** Wrong image opening during editing image info."
      }
    ]
  },
  {
    "version": "1.12.1",
    "date": "12.04.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Issue with selecting Blog templates.",
        "raw": "**Fixed:** Issue with selecting Blog templates."
      }
    ]
  },
  {
    "version": "1.12.0",
    "date": "11.04.2025",
    "items": [
      {
        "type": "added",
        "text": "Blog view.",
        "raw": "**Added:** Blog view."
      },
      {
        "type": "added",
        "text": "About Us, Travel Blog pre-built templates.",
        "raw": "**Added:** About Us, Travel Blog pre-built templates."
      }
    ]
  },
  {
    "version": "1.11.1",
    "date": "08.04.2025",
    "items": [
      {
        "type": "improved",
        "text": "Lightbox loading performance.",
        "raw": "**Improved:** Lightbox loading performance."
      },
      {
        "type": "improved",
        "text": "Images load time in Masonry and Mosaic views.",
        "raw": "**Improved:** Images load time in Masonry and Mosaic views."
      },
      {
        "type": "other",
        "text": "Default values for Hover effect and Title visibility options.",
        "raw": "**Changed:** Default values for Hover effect and Title visibility options."
      },
      {
        "type": "fixed",
        "text": "The wrong image opens in the lightbox when the selected image is not on the first page.",
        "raw": "**Fixed:** The wrong image opens in the lightbox when the selected image is not on the first page."
      }
    ]
  },
  {
    "version": "1.11.0",
    "date": "03.04.2025",
    "items": [
      {
        "type": "added",
        "text": "Ability to include posts and pages in the gallery.",
        "raw": "**Added:** Ability to include posts and pages in the gallery."
      }
    ]
  },
  {
    "version": "1.10.5",
    "date": "26.03.2025",
    "items": [
      {
        "type": "improved",
        "text": "Gallery loading performance for faster page load times.",
        "raw": "**Improved:** Gallery loading performance for faster page load times."
      },
      {
        "type": "fixed",
        "text": "Style conflicts affecting Lightbox and slideshow control buttons when used with third-party plugins and themes.",
        "raw": "**Fixed:** Style conflicts affecting Lightbox and slideshow control buttons when used with third-party plugins and themes."
      }
    ]
  },
  {
    "version": "1.10.4",
    "date": "18.03.2025",
    "items": [
      {
        "type": "added",
        "text": "Logic for displaying admin notices in the dashboard.",
        "raw": "**Added:** Logic for displaying admin notices in the dashboard."
      }
    ]
  },
  {
    "version": "1.10.3",
    "date": "12.03.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Compatibility issue with the LiteSpeed Cache plugin.",
        "raw": "**Fixed:** Compatibility issue with the LiteSpeed Cache plugin."
      },
      {
        "type": "fixed",
        "text": "CSS conflicts with the Divi builder.",
        "raw": "**Fixed:** CSS conflicts with the Divi builder."
      }
    ]
  },
  {
    "version": "1.10.2",
    "date": "09.03.2025",
    "items": [
      {
        "type": "added",
        "text": "Option to set an action URL for image clicks.",
        "raw": "**Added:** Option to set an action URL for image clicks."
      },
      {
        "type": "added",
        "text": "Ability to enable Lightbox for Slideshow, Cube, Carousel, and Cards views.",
        "raw": "**Added:** Ability to enable Lightbox for Slideshow, Cube, Carousel, and Cards views."
      },
      {
        "type": "improved",
        "text": "Faster loading time.",
        "raw": "**Improved:** Faster loading time."
      },
      {
        "type": "fixed",
        "text": "Issue with multiple Cube, Carousel, and Cards galleries on the same page.",
        "raw": "**Fixed:** Issue with multiple Cube, Carousel, and Cards galleries on the same page."
      },
      {
        "type": "fixed",
        "text": "Edit images section now appears in Gutenberg for already selected galleries.",
        "raw": "**Fixed:** Edit images section now appears in Gutenberg for already selected galleries."
      }
    ]
  },
  {
    "version": "1.10.1",
    "date": "04.03.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Options reset issue when selecting the \"Default template\".",
        "raw": "**Fixed:** Options reset issue when selecting the \"Default template\"."
      }
    ]
  },
  {
    "version": "1.10.0",
    "date": "26.02.2025",
    "items": [
      {
        "type": "added",
        "text": "Focus Frame pre-built template.",
        "raw": "**Added:** Focus Frame pre-built template."
      },
      {
        "type": "added",
        "text": "Ability to create galleries and add images directly from the Gutenberg editor.",
        "raw": "**Added:** Ability to create galleries and add images directly from the Gutenberg editor."
      },
      {
        "type": "added",
        "text": "Help section in the gallery edit page to guide users on publishing the gallery.",
        "raw": "**Added:** Help section in the gallery edit page to guide users on publishing the gallery."
      }
    ]
  },
  {
    "version": "1.9.20",
    "date": "19.02.2025",
    "items": [
      {
        "type": "added",
        "text": "Flicker Frame pre-built template.",
        "raw": "**Added:** Flicker Frame pre-built template."
      },
      {
        "type": "improved",
        "text": "Overall load time for better performance.",
        "raw": "**Improved:** Overall load time for better performance."
      },
      {
        "type": "fixed",
        "text": "Issues with multiple galleries in Divi builder.",
        "raw": "**Fixed:** Issues with multiple galleries in Divi builder."
      },
      {
        "type": "fixed",
        "text": "Block preview in Gutenberg.",
        "raw": "**Fixed:** Block preview in Gutenberg."
      }
    ]
  },
  {
    "version": "1.9.19",
    "date": "14.02.2025",
    "items": [
      {
        "type": "added",
        "text": "Testimonial Gallery pre-built template.",
        "raw": "**Added:** Testimonial Gallery pre-built template."
      },
      {
        "type": "fixed",
        "text": "JavaScript error in the Gutenberg editor.",
        "raw": "**Fixed:** JavaScript error in the Gutenberg editor."
      },
      {
        "type": "fixed",
        "text": "PHP notice and JavaScript error in the Divi builder.",
        "raw": "**Fixed:** PHP notice and JavaScript error in the Divi builder."
      },
      {
        "type": "fixed",
        "text": "JavaScript error when no gallery is selected in the Elementor widget.",
        "raw": "**Fixed:** JavaScript error when no gallery is selected in the Elementor widget."
      },
      {
        "type": "fixed",
        "text": "Script inclusion issue on the page after removing the gallery widget from the Elementor.",
        "raw": "**Fixed:** Script inclusion issue on the page after removing the gallery widget from the Elementor."
      },
      {
        "type": "fixed",
        "text": "Extra space appearing when there is no data to display.",
        "raw": "**Fixed:** Extra space appearing when there is no data to display."
      },
      {
        "type": "fixed",
        "text": "Close button for the Preview template video popup.",
        "raw": "**Fixed:** Close button for the Preview template video popup."
      }
    ]
  },
  {
    "version": "1.9.18",
    "date": "10.02.2025",
    "items": [
      {
        "type": "added",
        "text": "Digital Shop, Spotlight Ad, Infinite Scroll pre-built templates.",
        "raw": "**Added:** Digital Shop, Spotlight Ad, Infinite Scroll pre-built templates."
      },
      {
        "type": "fixed",
        "text": "Issue with Divi Builder.",
        "raw": "**Fixed:** Issue with Divi Builder."
      },
      {
        "type": "fixed",
        "text": "Cards view overlapping issue in some cases.",
        "raw": "**Fixed:** Cards view overlapping issue in some cases."
      }
    ]
  },
  {
    "version": "1.9.17",
    "date": "03.02.2025",
    "items": [
      {
        "type": "added",
        "text": "Blinds Slider pre-built template.",
        "raw": "**Added:** Blinds Slider pre-built template."
      }
    ]
  },
  {
    "version": "1.9.16",
    "date": "29.01.2025",
    "items": [
      {
        "type": "added",
        "text": "Overlay Slideshow pre-built template.",
        "raw": "**Added:** Overlay Slideshow pre-built template."
      },
      {
        "type": "fixed",
        "text": "Conflicts with cache plugins.",
        "raw": "**Fixed:** Conflicts with cache plugins."
      },
      {
        "type": "fixed",
        "text": "Prevented third-party plugin/theme notices from displaying on the plugin's admin pages.",
        "raw": "**Fixed:** Prevented third-party plugin/theme notices from displaying on the plugin's admin pages."
      }
    ]
  },
  {
    "version": "1.9.15",
    "date": "24.01.2025",
    "items": [
      {
        "type": "added",
        "text": "Media Catalog pre-built template.",
        "raw": "**Added:** Media Catalog pre-built template."
      },
      {
        "type": "fixed",
        "text": "Gallery type remains unchanged on Reset.",
        "raw": "**Fixed:** Gallery type remains unchanged on Reset."
      }
    ]
  },
  {
    "version": "1.9.14",
    "date": "15.01.2025",
    "items": [
      {
        "type": "added",
        "text": "Tooltip to the templates list for newly added galleries.",
        "raw": "**Added:** Tooltip to the templates list for newly added galleries."
      },
      {
        "type": "added",
        "text": "Notification for users attempting to leave an unsaved gallery.",
        "raw": "**Added:** Notification for users attempting to leave an unsaved gallery."
      },
      {
        "type": "improved",
        "text": "Prevented the new gallery page from reloading after adding images.",
        "raw": "**Improved:** Prevented the new gallery page from reloading after adding images."
      },
      {
        "type": "fixed",
        "text": "Thumbnails view container width issue in certain cases.",
        "raw": "**Fixed:** Thumbnails view container width issue in certain cases."
      },
      {
        "type": "fixed",
        "text": "Position of slideshow control buttons in some cases.",
        "raw": "**Fixed:** Position of slideshow control buttons in some cases."
      }
    ]
  },
  {
    "version": "1.9.13",
    "date": "09.01.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Load gallery despite any JavaScript errors on the page.",
        "raw": "**Fixed:** Load gallery despite any JavaScript errors on the page."
      }
    ]
  },
  {
    "version": "1.9.12",
    "date": "04.01.2025",
    "items": [
      {
        "type": "fixed",
        "text": "Gallery loading issue in the admin panel.",
        "raw": "**Fixed:** Gallery loading issue in the admin panel."
      },
      {
        "type": "fixed",
        "text": "Loading for Carousel, Cards and Cube views.",
        "raw": "**Fixed:** Loading for Carousel, Cards and Cube views."
      }
    ]
  },
  {
    "version": "1.9.11",
    "date": "26.12.2024",
    "items": [
      {
        "type": "added",
        "text": "Tide Frame pre-built template.",
        "raw": "**Added:** Tide Frame pre-built template."
      },
      {
        "type": "fixed",
        "text": "Bug when switching between templates.",
        "raw": "**Fixed:** Bug when switching between templates."
      }
    ]
  },
  {
    "version": "1.9.10",
    "date": "18.12.2024",
    "items": [
      {
        "type": "added",
        "text": "Prism Pattern, PolyGrid, Hive Lens, Dynamic Slant pre-built templates.",
        "raw": "**Added:** Prism Pattern, PolyGrid, Hive Lens, Dynamic Slant pre-built templates."
      }
    ]
  },
  {
    "version": "1.9.9",
    "date": "11.12.2024",
    "items": [
      {
        "type": "fixed",
        "text": "Removed unnecessary space at the bottom of the gallery.",
        "raw": "**Fixed:** Removed unnecessary space at the bottom of the gallery."
      }
    ]
  },
  {
    "version": "1.9.8",
    "date": "05.12.2024",
    "items": [
      {
        "type": "added",
        "text": "Harmonic Chaos, Collage, Circle Grid, Display Collection, Modern Pattern, Photo Album pre-built templates.",
        "raw": "**Added:** Harmonic Chaos, Collage, Circle Grid, Display Collection, Modern Pattern, Photo Album pre-built templates."
      }
    ]
  },
  {
    "version": "1.9.7",
    "date": "27.11.2024",
    "items": [
      {
        "type": "added",
        "text": "A popup to specify the reason for deactivation.",
        "raw": "**Added:** A popup to specify the reason for deactivation."
      },
      {
        "type": "added",
        "text": "Support and Rate links on the plugins page.",
        "raw": "**Added:** Support and Rate links on the plugins page."
      },
      {
        "type": "fixed",
        "text": "Issue with saving the Zoom In/Out hover effect option.",
        "raw": "**Fixed:** Issue with saving the Zoom In/Out hover effect option."
      }
    ]
  },
  {
    "version": "1.9.6",
    "date": "21.11.2024",
    "items": [
      {
        "type": "fixed",
        "text": "Notifications in the Gutenberg editor.",
        "raw": "**Fixed:** Notifications in the Gutenberg editor."
      },
      {
        "type": "fixed",
        "text": "Warning when switching between templates.",
        "raw": "**Fixed:** Warning when switching between templates."
      }
    ]
  },
  {
    "version": "1.9.5",
    "date": "13.11.2024",
    "items": [
      {
        "type": "added",
        "text": "Option to use the theme's default font family for titles and descriptions.",
        "raw": "**Added:** Option to use the theme's default font family for titles and descriptions."
      },
      {
        "type": "fixed",
        "text": "Automatically delete all options associated with the gallery when the gallery is removed.",
        "raw": "**Fixed:** Automatically delete all options associated with the gallery when the gallery is removed."
      }
    ]
  },
  {
    "version": "1.9.4",
    "date": "07.11.2024",
    "items": [
      {
        "type": "fixed",
        "text": "Resolved error occurring when saving gallery in specific cases.",
        "raw": "**Fixed:** Resolved error occurring when saving gallery in specific cases."
      },
      {
        "type": "fixed",
        "text": "Removed unnecessary shadow on lightbox buttons for certain themes.",
        "raw": "**Fixed:** Removed unnecessary shadow on lightbox buttons for certain themes."
      },
      {
        "type": "fixed",
        "text": "Disabled the Additional CSS Class(es) option in Gutenberg.",
        "raw": "**Fixed:** Disabled the Additional CSS Class(es) option in Gutenberg."
      }
    ]
  },
  {
    "version": "1.9.3",
    "date": "30.10.2024",
    "items": [
      {
        "type": "added",
        "text": "Container padding option for Thumbnails, Mosaic and Masonry views.",
        "raw": "**Added:** Container padding option for Thumbnails, Mosaic and Masonry views."
      }
    ]
  },
  {
    "version": "1.9.2",
    "date": "22.10.2024",
    "items": [
      {
        "type": "fixed",
        "text": "An issue where the plugin unintentionally changed the website's font.",
        "raw": "**Fixed:** An issue where the plugin unintentionally changed the website's font."
      }
    ]
  },
  {
    "version": "1.9.1",
    "date": "15.10.2024",
    "items": [
      {
        "type": "fixed",
        "text": "Preview issue in the Gutenberg editor on Firefox.",
        "raw": "**Fixed:** Preview issue in the Gutenberg editor on Firefox."
      }
    ]
  },
  {
    "version": "1.9.0",
    "date": "07.10.2024",
    "items": [
      {
        "type": "added",
        "text": "Cards view.",
        "raw": "**Added:** Cards view."
      },
      {
        "type": "fixed",
        "text": "Template reset in the Carousel view.",
        "raw": "**Fixed:** Template reset in the Carousel view."
      }
    ]
  },
  {
    "version": "1.8.4",
    "date": "01.10.2024",
    "items": [
      {
        "type": "added",
        "text": "Gallery sorting options.",
        "raw": "**Added:** Gallery sorting options."
      }
    ]
  },
  {
    "version": "1.8.3",
    "date": "25.09.2024",
    "items": [
      {
        "type": "fixed",
        "text": "Carousel pre-built templates.",
        "raw": "**Fixed:** Carousel pre-built templates."
      }
    ]
  },
  {
    "version": "1.8.2",
    "date": "17.09.2024",
    "items": [
      {
        "type": "improved",
        "text": "Image responsiveness in the Carousel view.",
        "raw": "**Improved:** Image responsiveness in the Carousel view."
      },
      {
        "type": "improved",
        "text": "Image responsiveness in the Cube view.",
        "raw": "**Improved:** Image responsiveness in the Cube view."
      },
      {
        "type": "improved",
        "text": "Initial load time in the Cube view.",
        "raw": "**Improved:** Initial load time in the Cube view."
      },
      {
        "type": "improved",
        "text": "Responsiveness of the Types section.",
        "raw": "**Improved:** Responsiveness of the Types section."
      }
    ]
  },
  {
    "version": "1.8.1",
    "date": "11.09.2024",
    "items": [
      {
        "type": "improved",
        "text": "Minimized requests.",
        "raw": "**Improved:** Minimized requests."
      },
      {
        "type": "improved",
        "text": "The first load in the Carousel view.",
        "raw": "**Improved:** The first load in the Carousel view."
      },
      {
        "type": "fixed",
        "text": "Play/pause in the Carousel view.",
        "raw": "**Fixed:** Play/pause in the Carousel view."
      }
    ]
  },
  {
    "version": "1.8.0",
    "date": "04.09.2024",
    "items": [
      {
        "type": "added",
        "text": "Carousel view.",
        "raw": "**Added:** Carousel view."
      }
    ]
  },
  {
    "version": "1.7.4",
    "date": "28.08.2024",
    "items": [
      {
        "type": "fixed",
        "text": "Do not change type on Reset.",
        "raw": "**Fixed:** Do not change type on Reset."
      }
    ]
  },
  {
    "version": "1.7.3",
    "date": "19.08.2024",
    "items": [
      {
        "type": "added",
        "text": "Padding option to the Cube view․",
        "raw": "**Added:** Padding option to the Cube view․"
      }
    ]
  },
  {
    "version": "1.7.2",
    "date": "12.08.2024",
    "items": [
      {
        "type": "fixed",
        "text": "Templates list responsiveness.",
        "raw": "**Fixed:** Templates list responsiveness."
      },
      {
        "type": "fixed",
        "text": "Options reset, when there isn't selected template(None).",
        "raw": "**Fixed:** Options reset, when there isn't selected template(None)."
      }
    ]
  },
  {
    "version": "1.7.1",
    "date": "06.08.2024",
    "items": [
      {
        "type": "fixed",
        "text": "Compatibility with Elementor Basic Gallery widget.",
        "raw": "**Fixed:** Compatibility with Elementor Basic Gallery widget."
      }
    ]
  },
  {
    "version": "1.7.0",
    "date": "06.08.2024",
    "items": [
      {
        "type": "added",
        "text": "Pre-Built templates․",
        "raw": "**Added:** Pre-Built templates․"
      },
      {
        "type": "added",
        "text": "Demo gallery in Live Preview.",
        "raw": "**Added:** Demo gallery in Live Preview."
      }
    ]
  },
  {
    "version": "1.6.0",
    "date": "29.07.2024",
    "items": [
      {
        "type": "added",
        "text": "Cube view.",
        "raw": "**Added:** Cube view."
      },
      {
        "type": "fixed",
        "text": "Permalinks for the gallery custom post type after a fresh installation.",
        "raw": "**Fixed:** Permalinks for the gallery custom post type after a fresh installation."
      }
    ]
  },
  {
    "version": "1.5.3",
    "date": "19.07.2024",
    "items": [
      {
        "type": "fixed",
        "text": "Lightbox navigation and control buttons' background in some themes.",
        "raw": "**Fixed:** Lightbox navigation and control buttons' background in some themes."
      }
    ]
  },
  {
    "version": "1.5.2",
    "date": "08.07.2024",
    "items": [
      {
        "type": "fixed",
        "text": "JavaScript error when inserting the gallery with Gutenberg initially.",
        "raw": "**Fixed:** JavaScript error when inserting the gallery with Gutenberg initially."
      },
      {
        "type": "fixed",
        "text": "Slideshow navigation buttons' background in some themes.",
        "raw": "**Fixed:** Slideshow navigation buttons' background in some themes."
      }
    ]
  },
  {
    "version": "1.5.1",
    "date": "01.07.2024",
    "items": [
      {
        "type": "fixed",
        "text": "Caption container height issue in the slideshow.",
        "raw": "**Fixed:** Caption container height issue in the slideshow."
      },
      {
        "type": "fixed",
        "text": "Ellipsis color for long titles in thumbnails, mosaic and masonry views.",
        "raw": "**Fixed:** Ellipsis color for long titles in thumbnails, mosaic and masonry views."
      }
    ]
  },
  {
    "version": "1.5.0",
    "date": "24.06.2024",
    "items": [
      {
        "type": "added",
        "text": "Slideshow gallery view.",
        "raw": "**Added:** Slideshow gallery view."
      },
      {
        "type": "improved",
        "text": "Responsiveness of the gallery type section.",
        "raw": "**Improved:** Responsiveness of the gallery type section."
      }
    ]
  },
  {
    "version": "1.4.2",
    "date": "17.06.2024",
    "items": [
      {
        "type": "added",
        "text": "The ability to sort galleries by image count on the galleries list page.",
        "raw": "**Added:** The ability to sort galleries by image count on the galleries list page."
      },
      {
        "type": "fixed",
        "text": "Special characters in the title and description.",
        "raw": "**Fixed:** Special characters in the title and description."
      },
      {
        "type": "fixed",
        "text": "Galleries list page responsiveness.",
        "raw": "**Fixed:** Galleries list page responsiveness."
      }
    ]
  },
  {
    "version": "1.4.1",
    "date": "10.06.2024",
    "items": [
      {
        "type": "added",
        "text": "Module for Divi Builder.",
        "raw": "**Added:** Module for Divi Builder."
      },
      {
        "type": "improved",
        "text": "Include necessary JS/CSS files only on the gallery pages.",
        "raw": "**Improved:** Include necessary JS/CSS files only on the gallery pages."
      },
      {
        "type": "fixed",
        "text": "Cross-Site Scripting vulnerability on the edit gallery page.",
        "raw": "**Fixed:** Cross-Site Scripting vulnerability on the edit gallery page."
      },
      {
        "type": "fixed",
        "text": "Hover effect \"Shine\" for large images.",
        "raw": "**Fixed:** Hover effect \"Shine\" for large images."
      }
    ]
  },
  {
    "version": "1.4.0",
    "date": "03.06.2024",
    "items": [
      {
        "type": "added",
        "text": "Masonry view.",
        "raw": "**Added:** Masonry view."
      },
      {
        "type": "improved",
        "text": "Mosaic view responsiveness.",
        "raw": "**Improved:** Mosaic view responsiveness."
      },
      {
        "type": "fixed",
        "text": "Preview alignment in editors.",
        "raw": "**Fixed:** Preview alignment in editors."
      },
      {
        "type": "fixed",
        "text": "Saving Title position.",
        "raw": "**Fixed:** Saving Title position."
      },
      {
        "type": "fixed",
        "text": "Saving options on gallery update.",
        "raw": "**Fixed:** Saving options on gallery update."
      }
    ]
  },
  {
    "version": "1.3.0",
    "date": "27.05.2024",
    "items": [
      {
        "type": "added",
        "text": "Horizontal and Vertical Mosaic views.",
        "raw": "**Added:** Horizontal and Vertical Mosaic views."
      },
      {
        "type": "added",
        "text": "Options to configure Mosaic view.",
        "raw": "**Added:** Options to configure Mosaic view."
      },
      {
        "type": "added",
        "text": "One more size for images to make the views more lightweight.",
        "raw": "**Added:** One more size for images to make the views more lightweight."
      },
      {
        "type": "fixed",
        "text": "Lightbox control buttons with Title position top/above.",
        "raw": "**Fixed:** Lightbox control buttons with Title position top/above."
      },
      {
        "type": "fixed",
        "text": "Reload preview on Title update.",
        "raw": "**Fixed:** Reload preview on Title update."
      },
      {
        "type": "fixed",
        "text": "Remove added thumbnail for videos on deleting the video from the gallery.",
        "raw": "**Fixed:** Remove added thumbnail for videos on deleting the video from the gallery."
      },
      {
        "type": "fixed",
        "text": "Image duplication while scroll load.",
        "raw": "**Fixed:** Image duplication while scroll load."
      }
    ]
  },
  {
    "version": "1.2.3",
    "date": "21.05.2024",
    "items": [
      {
        "type": "fixed",
        "text": "Do not show pagination for one-page galleries.",
        "raw": "**Fixed:** Do not show pagination for one-page galleries."
      },
      {
        "type": "fixed",
        "text": "Video thumbnails alignment in lightbox.",
        "raw": "**Fixed:** Video thumbnails alignment in lightbox."
      }
    ]
  },
  {
    "version": "1.2.2",
    "date": "13.05.2024",
    "items": [
      {
        "type": "added",
        "text": "Multiple animations for transitioning between images in the lightbox.",
        "raw": "**Added:** Multiple animations for transitioning between images in the lightbox."
      },
      {
        "type": "added",
        "text": "Dutch translation contributed by Peter Smits.",
        "raw": "**Added:** Dutch translation contributed by Peter Smits."
      },
      {
        "type": "improved",
        "text": "Spanish translation approved by Fernando Tellado.",
        "raw": "**Improved:** Spanish translation approved by Fernando Tellado."
      },
      {
        "type": "fixed",
        "text": "Thumbnail ratio issue.",
        "raw": "**Fixed:** Thumbnail ratio issue."
      }
    ]
  },
  {
    "version": "1.2.1",
    "date": "03.05.2024",
    "items": [
      {
        "type": "added",
        "text": "Multiple hover effects for the Thumbnails view.",
        "raw": "**Added:** Multiple hover effects for the Thumbnails view."
      },
      {
        "type": "fixed",
        "text": "Thumbnail title alignment with Padding.",
        "raw": "**Fixed:** Thumbnail title alignment with Padding."
      },
      {
        "type": "fixed",
        "text": "Thumbnail title alignment with Radius.",
        "raw": "**Fixed:** Thumbnail title alignment with Radius."
      }
    ]
  },
  {
    "version": "1.2.0",
    "date": "24.04.2024",
    "items": [
      {
        "type": "added",
        "text": "Video support.",
        "raw": "**Added:** Video support."
      },
      {
        "type": "added",
        "text": "Background color option for lightbox.",
        "raw": "**Added:** Background color option for lightbox."
      },
      {
        "type": "fixed",
        "text": "Caption visibility with some themes.",
        "raw": "**Fixed:** Caption visibility with some themes."
      },
      {
        "type": "fixed",
        "text": "Images count in galleries list page after attachment delete.",
        "raw": "**Fixed:** Images count in galleries list page after attachment delete."
      }
    ]
  },
  {
    "version": "1.1.0",
    "date": "16.04.2024",
    "items": [
      {
        "type": "added",
        "text": "Lightbox options to disable control buttons.",
        "raw": "**Added:** Lightbox options to disable control buttons."
      },
      {
        "type": "added",
        "text": "Option to have not full width lightbox.",
        "raw": "**Added:** Option to have not full width lightbox."
      },
      {
        "type": "added",
        "text": "Option to have autoplay in the lightbox.",
        "raw": "**Added:** Option to have autoplay in the lightbox."
      },
      {
        "type": "added",
        "text": "Option to show caption and description in the lightbox.",
        "raw": "**Added:** Option to show caption and description in the lightbox."
      },
      {
        "type": "added",
        "text": "Filmstrip to the lightbox.",
        "raw": "**Filmstrip to the lightbox.**"
      },
      {
        "type": "added",
        "text": "Possibility to reset options.",
        "raw": "**Added:** Possibility to reset options."
      },
      {
        "type": "added",
        "text": "Widget for Elementor.",
        "raw": "**Added:** Widget for Elementor."
      },
      {
        "type": "improved",
        "text": "Use respective size of image based on the dimensions.",
        "raw": "**Improved:** Use respective size of image based on the dimensions."
      },
      {
        "type": "improved",
        "text": "Ability to load images in the lightbox partially, rather than all at once.",
        "raw": "**Improved:** Ability to load images in the lightbox partially, rather than all at once."
      },
      {
        "type": "fixed",
        "text": "Remove image from the galleries on attachment delete.",
        "raw": "**Fixed:** Remove image from the galleries on attachment delete."
      },
      {
        "type": "fixed",
        "text": "Include necessary js/css files only in the custom post pages.",
        "raw": "**Fixed:** Include necessary js/css files only in the custom post pages."
      },
      {
        "type": "fixed",
        "text": "Autosave for newly created galleries.",
        "raw": "**Fixed:** Autosave for newly created galleries."
      },
      {
        "type": "fixed",
        "text": "The selection of already added images in the Media uploader.",
        "raw": "**Fixed:** The selection of already added images in the Media uploader."
      },
      {
        "type": "fixed",
        "text": "Validation for options.",
        "raw": "**Fixed:** Validation for options."
      },
      {
        "type": "fixed",
        "text": "Number input's value changing on scroll.",
        "raw": "**Fixed:** Number input's value changing on scroll."
      },
      {
        "type": "fixed",
        "text": "Load more button default color.",
        "raw": "**Fixed:** Load more button default color."
      }
    ]
  },
  {
    "version": "1.0.1",
    "date": "28.03.2024",
    "items": [
      {
        "type": "added",
        "text": "Translation files for 10 languages.",
        "raw": "**Added:** Translation files for 10 languages."
      },
      {
        "type": "fixed",
        "text": "Compatibility with PHP v7.0.",
        "raw": "**Fixed:** Compatibility with PHP v7.0."
      },
      {
        "type": "fixed",
        "text": "Missing content when checking with \"Preview Changes\" button.",
        "raw": "**Fixed:** Missing content when checking with \"Preview Changes\" button."
      },
      {
        "type": "fixed",
        "text": "Save options in the Playground․",
        "raw": "**Fixed:** Save options in the Playground․"
      }
    ]
  },
  {
    "version": "1.0.0",
    "date": "14.03.2024",
    "items": [
      {
        "type": "other",
        "text": "Initial version.",
        "raw": "Initial version."
      }
    ]
  }
];

export default historicalChangelogData;
