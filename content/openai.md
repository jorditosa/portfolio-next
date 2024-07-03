# OpenAI Chat

Here is small script to create a **chatbot with OpenAI** technology.
The OpenAI's language models, such as the GPT (Generative Pre-trained Transformer) series, are based on the transformer architecture, which allows them to handle context and dependencies over long text spans more effectively than previous architectures.

Note that **Tokens** are the basic units of text that the language model processes. A token can be as short as one character or as long as one word, depending on the language and the context.

Hope you find good utility for your projects.

*It is necessary to stablish an `.env` file with API KEY from OpenAI.*


```
from openai import OpenAI
from colorama import Fore, Style, init
from dotenv import load_dotenv

def chat_with_gpt(prompt):
    # Load environment vars
    load_dotenv()

    client = OpenAI()
    chat_completion = client.chat.completions.create(
        model="gpt-3.5-turbo-0125",
        messages=[{
            "role": "user",
            "content": prompt
        }]
    )

    return chat_completion.choices[0].message.content

if __name__ == "__main__":

    while True:
        user_input = input(Fore.WHITE + "You: ")
        if user_input.lower() in ["quit", "exit", "bye", "adios"]:
            break

        response = chat_with_gpt(user_input)
        print(Fore.GREEN + "Chatbot: ", response + Style.RESET_ALL)
```