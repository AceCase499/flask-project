from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory array to hold user data
users = []

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/users', methods=['POST'])
def add_user():
    data = request.get_json()
    name = data.get('name')
    age = data.get('age')
    
    if not name or not age:
        return jsonify({"error": "Name and age are required"}), 400
    
    users.append({'name': name, 'age': age})
    return jsonify(users), 201

if __name__ == '__main__':
    app.run(debug=True)
