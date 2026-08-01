source 'https://rubygems.org'

# Stdlib libraries that became bundled gems in Ruby 3.4+ and so must now be
# declared explicitly. citeproc-ruby (via jekyll-scholar) requires 'observer';
# the rest are pulled in transitively by the same dependency tree. Needed
# because the al-folio Docker image builds FROM ruby:latest, which is now 4.x.
gem 'base64'
gem 'bigdecimal'
gem 'csv'
gem 'logger'
gem 'observer'
gem 'ostruct'

group :jekyll_plugins do
    gem 'classifier-reborn'
    gem 'jekyll'
    gem 'jekyll-archives'
    gem 'jekyll-email-protect'
    gem 'jekyll-feed'
    gem 'jekyll-get-json'
    gem 'jekyll-imagemagick'
    gem 'jekyll-jupyter-notebook'
    gem 'jekyll-link-attributes'
    gem 'jekyll-minifier'
    gem 'jekyll-paginate-v2'
    gem 'jekyll-regex-replace'
    gem 'jekyll-scholar'
    gem 'jekyll-sitemap'
    gem 'jekyll-tabs'
    gem 'jekyll-toc'
    gem 'jekyll-twitter-plugin'
    gem 'jemoji'
    gem 'mini_racer'
    gem 'unicode_utils'
    gem 'webrick'
end
group :other_plugins do
    gem 'css_parser'
    gem 'feedjira'
    gem 'httparty'
end
