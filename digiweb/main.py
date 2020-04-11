import os

from flask import Flask
from flask import render_template, send_from_directory

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


def main():
    app.run()


if __name__ == "__main__":
    main()
