import pandas as pd

# Define the file path
splits = {'train': 'data/train-00000-of-00001.parquet', 'validation': 'data/validation-00000-of-00001.parquet', 'test': 'data/test-00000-of-00001.parquet'}
parquet_file_path = "hf://datasets/ParlAI/blended_skill_talk/" + splits["train"]

# Load the Parquet file
df = pd.read_parquet(parquet_file_path)

# Convert to JSON and save
df.to_json('data.json', orient='records', lines=True)

print("Conversion complete. JSON saved as 'data.json'.")