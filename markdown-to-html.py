#tabedata.txt is a file that contains the piped markdown table rows
import sys
with open (sys.argv[1]) as f:
    content = f.readlines()

rows = []

for c in content:
    cells = c.split('|')
    cells = ['<td>{}</td>'.format(cell.strip()) for cell in cells] 
    rows.append(cells)

#htmltable.txt contains the html table rows
file = open('htmlrows.txt', 'w+')
for r in rows:
    file.write('<tr>\n')
    for c in r:
        file.write('    {}\n'.format(c))
    file.write('</tr>\n')
file.close()
