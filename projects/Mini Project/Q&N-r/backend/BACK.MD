k = 2
top_k_idk = scores[0].argsort()[-k:][::-1]
answer = '\n'.join([chunks[i] for i in top_k_idk])
print("qna-r: ",answer)