# thuyetngocluong.github.io

Personal site of Thuyet Luong (Zoro4rk), an iOS developer, served with GitHub Pages at
<https://thuyetngocluong.github.io>.

The site is plain static HTML. There is no build step: every file in this repository is
published as is.

## Pages

| Path | What it is |
| --- | --- |
| `index.html` | Home page: profile, contact links and the list of apps on the App Store. |
| `policy_privacy/` | Privacy policies for each app (Diary - Nhật kí, LoveCounter, ThiTHPT, Cleaner, Countdowns, QR Code, Board Games, Báo Việt Nam, Diary: Simple Note Your Life). App Store listings link here. |
| `terms/` | Terms of use for ThiTHPT and Cleaner. |
| `support/` | Support page for LoveCounter. |
| `delete_account/` | Account deletion instructions for ThiTHPT. |
| `demo/duythanh.html` | Standalone demo landing page for Duy Thành Events. |
| `.well-known/apple-app-site-association` | Universal Links config for the iOS apps. |
| `assets/` | Images used by the pages (avatar, social icons). |
| `css/` | Stylesheets from an older design of the home page. No page links to them now. |

## Notes

- `.nojekyll` turns off Jekyll processing. Without it, GitHub Pages skips folders that start
  with a dot, so `.well-known/apple-app-site-association` would not be served.
- To add an app, add its card to `index.html` and put its policy page in `policy_privacy/`.
