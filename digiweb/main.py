from flask import Flask
from flask import render_template
import datetime

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/contact.html')
def contact():
    return render_template("contact.html")


def main():
    app.run()


if __name__ == "__main__":
    main()
