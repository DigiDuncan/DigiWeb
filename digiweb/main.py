from flask import Flask
import datetime

app = Flask(__name__)


@app.route('/')
def hello_world():
    return datetime.datetime.now()


def main():
    app.run()


if __name__ == "__main__":
    main()
