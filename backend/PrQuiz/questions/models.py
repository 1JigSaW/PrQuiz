from django.db import models

class Quiz(models.Model):
    question = models.TextField()
    answer_option = models.ForeignKey(AnswerOption, on_delete=models.CASCADE, null=True)
    answer_string = models.ForeignKey(AnswerString, on_delete=models.CASCADE, null=True)

    class Meta:
		ordering = ['question']

	def __str__(self):
		return self.question

class AnswerOption(models.Model):
    option1 = models.CharField(max_length=300)
    option2 = models.CharField(max_length=300)
    option3 = models.CharField(max_length=300)
    option4 = models.CharField(max_length=300)

	def __str__(self):
		return self.option1 + '|' + self.option2 + '|' + self.option3 + '|' + self.option4

class AnswerString(models.Model):
    answer = models.TextField()

    class Meta:
		ordering = ['answer']

	def __str__(self):
		return self.answer