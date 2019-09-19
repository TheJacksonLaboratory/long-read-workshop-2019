import pandas as pd
import sys
import os
import re
import shutil
import subprocess

inputs=sys.argv[1]
output_prefix=sys.argv[2]
df = pd.read_csv(inputs, sep=",", header=None, names=['Name','Bionano_Access_Instance','Username','Password'])
df['Bionano_Access_Instance'] = df["Bionano_Access_Instance"].map(lambda beta_value: "<a href='{}' target='_blank'>Bionano Access</a>".format(beta_value))

df.to_csv("csv-intermediate-file-csv", index=False, header=False)

def csvtomd(output):
    return subprocess.Popen(
        'csvtomd csv-intermediate-file-csv > {}.md; rm csv-intermediate-file-csv'.format(output),
         stdout=subprocess.PIPE, shell=True)

def mdtohtml(input_markdown, output_html):
    return subprocess.Popen(
        'pandoc -s {} -o  {};'.format(input_markdown, output_html),
         stdout=subprocess.PIPE, shell=True)

csvtomd(output_prefix)
#mdtohtml(input_markdown='users.md', output_html='users.html')

