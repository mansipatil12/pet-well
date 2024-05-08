import csv
import json

csv_file="pet_activities_final.csv"
json_file="pet_final.json"

def csv_to_json(csv_file, json_file):
    # Initialize an empty list to store the data
    data = []

    # Read data from the CSV file and append it to the list
    with open("pet_activities_final.csv", 'r') as csvfile:
        csvreader = csv.DictReader(csvfile)
        for row in csvreader:
            data.append(row)

    # Write the data to a JSON file
    with open("pet_final.json", 'w') as jsonfile:
        jsonfile.write(json.dumps(data, indent=4))

# Example usage:
csv_to_json('data.csv', 'data.json')