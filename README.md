# You Won't Get Left Behind

An honest, compassionate, heart-first way to talk about AI, move through the change it brings and build things together.

Live: https://4amiracle.github.io/youwontgetleftbehind/

## Working on it

- **Preview locally:** `bundle exec jekyll serve` → http://localhost:4000/youwontgetleftbehind/
  (restart the server after editing `_config.yml`, other edits reload on their own)
- **Publish:** double-click `Publish.command`, or push to `main` (GitHub Actions deploys in ~1 min)
- **New post:** add `_posts/YYYY-MM-DD-title.md` with `categories: learn` or `categories: lead`
- **Projects (About page):** edit `_data/projects.yml` (status: `live`, `building`, or `soon`)

## Where things live

| What | File |
| --- | --- |
| Homepage | `index.html` |
| Learn / Lead change / Together / About | `learn/`, `lead/`, `together/`, `about/` |
| Nav and footer | `_includes/nav.html`, `_includes/footer.html` |
| Idea box | `_includes/idea-box.html` |
| Styles | `assets/css/style.css` |
| Time-of-day sky, greeting, clock | `_layouts/default.html`, `assets/js/main.js` |

## Still to do

- [ ] Idea box: paste a Tally / Google Form link into `idea_form_url` in `_config.yml`
- [ ] Social links: `instagram_url` and `linkedin_url` in `_config.yml`
- [ ] Portrait: save a photo as `assets/img/mira.jpg` (placeholder shows until then)
- [ ] Together, slot 03: decide the third offering (idea: live builds)
- [ ] Optional: custom domain youwontgetleftbehind.com
- [ ] Optional: comments on posts (Giscus)

## Notes

- Never name Mira's employer on the site.
- Hero horizon sits below the buttons (`--horizon` in `.sky`).
