from flask import Flask, render_template, url_for
import os

app = Flask(__name__)

@app.route('/')
def index():
    file_dir = os.path.dirname(os.path.realpath(__file__))
    images_dir = os.path.join(file_dir,'static','img')
    images = list(os.listdir(images_dir))
    title = 'Пока ничего нет'
    if len(images):
        title = f"Фото 1 из {len(images)}"
    return render_template('index.html', images=images,title=title)


if __name__ == "__main__":
    app.run(debug=True)
