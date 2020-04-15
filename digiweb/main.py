import os

from flask import Flask
from flask import render_template, send_from_directory
from flask_assets import Environment, Bundle

app = Flask(__name__)
assets = Environment(app)

css = Bundle('sass/index_styles.sass',
             filters='libsass', output='css/packed.css')
assets.register('css_all', css)


@app.route('/')
def index():
    return render_template("pages/index.html")


@app.route('/contact.html')
def contact():
    return render_template("contact.html")


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


def main():
    app.run()


if __name__ == "__main__":
    main()
