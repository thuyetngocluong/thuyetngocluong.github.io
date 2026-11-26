# thuyetngocluong.github.io

Personal site of Lương Ngọc Thuyết, an iOS developer, served with GitHub Pages at
<https://thuyetngocluong.github.io>.

The site is plain static HTML. There is no build step: every file in this repository is
published as is.

## Pages

| Path | What it is |
| --- | --- |
| `index.html` | Home page: profile, contact links and the list of apps on the App Store. |
| `privacy/` | Privacy Center: one page listing every Thuyet Luong app with links to its policy, terms and App Store page. |
| `policy_privacy/` | Privacy policy for each app on the App Store (Cleaner, Countdowns, QR Code, Diary: Simple Note Your Life, Thi THPT, Diary - Nhật Ký), in English and Vietnamese. App Store listings link here, so keep the file names. |
| `terms/` | Terms of use for ThiTHPT and Cleaner. |
| `delete_account/` | Account deletion instructions for ThiTHPT. |
| `demo/duythanh.html` | Standalone demo landing page for Duy Thành Events. |
| `.well-known/apple-app-site-association` | Universal Links config for the iOS apps. |
| `assets/` | Images used by the pages (avatar, social icons). |
| `css/` | `tailwind.css` for the home page, `legal.css` for the Privacy Center, policy and terms pages, plus stylesheets from an older design that no page links to. |
| `js/legal.js` | English/Vietnamese switch and table of contents for the legal pages. |

## Notes

- `.nojekyll` turns off Jekyll processing. Without it, GitHub Pages skips folders that start
  with a dot, so `.well-known/apple-app-site-association` would not be served.
- To add an app, add its card to `index.html` and put its policy page in `policy_privacy/`.
