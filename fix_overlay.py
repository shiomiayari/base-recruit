fixes = [
    # NoteSection - light overlay (text is dark)
    ('src/components/home/NoteSection.tsx',
     'relative z-[1] bg-transparent overflow-hidden',
     'relative z-[1] bg-white/75 backdrop-blur-sm overflow-hidden'),
    # BusinessSection - light overlay
    ('src/components/home/BusinessSection.tsx',
     'relative z-[1] bg-transparent overflow-hidden',
     'relative z-[1] bg-white/75 backdrop-blur-sm overflow-hidden'),
    # JobOpenings - dark overlay (text is white)
    ('src/components/home/JobOpenings.tsx',
     'relative z-[1] py-32 bg-transparent text-white overflow-hidden',
     'relative z-[1] py-32 bg-zinc-950/85 backdrop-blur-sm text-white overflow-hidden'),
    # VoicesSection - dark overlay (text is white)
    ('src/components/home/VoicesSection.tsx',
     'relative z-[1] py-24 bg-transparent',
     'relative z-[1] py-24 bg-zinc-950/75 backdrop-blur-sm'),
    # FAQSection - dark overlay (text is white)
    ('src/components/home/FAQSection.tsx',
     'relative z-[1] py-24 bg-transparent',
     'relative z-[1] py-24 bg-zinc-950/75 backdrop-blur-sm'),
]

for fp, old, new in fixes:
    try:
        with open(fp, 'r', encoding='utf-8') as f:
            content = f.read()
        if old in content:
            content = content.replace(old, new, 1)
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'Fixed: {fp}')
        else:
            print(f'NOT FOUND: {fp}')
    except Exception as e:
        print(f'Error {fp}: {e}')

print('Done')
