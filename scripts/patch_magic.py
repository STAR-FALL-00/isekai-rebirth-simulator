import sys

with open('generate-events.cjs', 'r', encoding='utf-8') as f:
    content = f.read()

# Patch 1: Identity
old1 = """function generateIdentityEvents(w) {
  if (w.prefix === 'cx') {
    return generateCultivationIdentityEvents(w);
  }

  const T = [];"""

if old1 not in content:
    print('ERROR: Identity marker not found')
    sys.exit(1)

print('Found identity marker')
fs.writeFileSync('generate-events.cjs.bak', content);
