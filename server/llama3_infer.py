from transformers import LlamaForCausalLM, LlamaTokenizer

# Will depreciate this file I we decide to use Ollama

# Model and Tokeniser
tokenizer = LlamaTokenizer.from_pretrained("{integrate/path/to/llama3/after/locally/installing/it}")
model = LlamaForCausalLM.from_pretrained("{integrate/path/to/llama3/after/locally/installing/it}")

def generate_response(prompt):
    inputs = tokenizer(prompt, return_tensors="pt")
    outputs = model.generate(inputs["input_ids"], max_length=50)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response

if __name__ == "__main__":
    import sys
    prompt = sys.argv[1]
    print(generate_response(prompt))
