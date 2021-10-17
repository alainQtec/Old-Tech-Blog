#!/usr/bin/python3
import argparse
import re
import subprocess

START_PATTERN = r'<style>'
END_PATTERN = r'</style>'
CSS_PATTERN = r'<style>(.*?)</style>'

def main(html_path):

    with open(html_path) as f:
        html = f.read()

    # Check there's only one style tag per file. This is the most
    # likely thing to break the regex parsing.
    n_starts = len(re.findall(START_PATTERN, html))
    n_ends = len(re.findall(END_PATTERN, html))
    if n_starts == 0:
        raise ValueError(f'No start token found for: {html_path}')
    if n_ends == 0:
        raise ValueError(f'No end token found: {html_path}')
    if n_starts > 1:
        raise ValueError(f'Too many start tokens found: {html_path}')
    if n_ends > 1:
        raise ValueError(f'Too many end tokens found: {html_path}')

    # Extract css.
    css = re.search(CSS_PATTERN, html, re.S)[1].strip()

    # Perform minification.
    cmd = [
        'uncss',
        '--raw', css,
        '--banner', 'false',
        html_path,
    ]
    uncss = subprocess.check_output(cmd).decode("utf-8") 

    # Put the css back in.
    new_css = '<style>' + uncss + '</style>'
    new_html = re.sub(CSS_PATTERN, new_css, html, flags=re.DOTALL)
    with open(html_path, 'w') as f:
        f.write(new_html)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(
      description='Remove unused inline css from an html file.'
    )
    parser.add_argument(
      'html_path',
      help='path to html file, will be rewritten',
      type=str,
    )
    args = parser.parse_args()
    main(args.html_path)
