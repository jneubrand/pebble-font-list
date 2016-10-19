var skip = [
    'leco_20_bold_numbers_lower',
    'leco_20_bold_numbers_latin',
    'leco_26_bold_numbers_am_pm_lower',
    'leco_26_bold_numbers_am_pm_latin',
    'leco_32_bold_numbers_upper',
    'leco_32_bold_numbers_lower',
    'leco_32_bold_numbers_latin',
    'leco_36_bold_numbers_upper',
    'leco_36_bold_numbers_lower',
    'leco_36_bold_numbers_latin',
    'leco_38_bold_numbers_upper',
    'leco_38_bold_numbers_lower',
    'leco_38_bold_numbers_latin',
    'leco_42_numbers_upper',
    'leco_42_numbers_lower',
    'leco_42_numbers_latin',
    'leco_28_light_numbers_upper',
    'leco_28_light_numbers_lower',
    'leco_28_light_numbers_latin',
    'bitham_18_light_subset_upper',
    'bitham_18_light_subset_numbers',
    'bitham_18_light_subset_latin',
    'bitham_34_medium_numbers_upper',
    'bitham_34_medium_numbers_lower',
    'bitham_34_medium_numbers_symbols',
    'bitham_34_medium_numbers_latin',
    'bitham_34_light_subset_upper',
    'bitham_34_light_subset_numbers',
    'bitham_34_light_subset_latin',
    'bitham_42_medium_numbers_upper',
    'bitham_42_medium_numbers_lower',
    'bitham_42_medium_numbers_latin',

    'roboto_bold_subset_49_upper',
    'roboto_bold_subset_49_lower',
    'roboto_bold_subset_49_symbols',
    'roboto_bold_subset_49_latin',
]

var flags = {
    'gothic_14': ['emoji-s'], 'gothic_14_bold': ['emoji-s'],
    'gothic_18': ['emoji-s'], 'gothic_18_bold': ['emoji-s'],
    'gothic_24': ['emoji-l'], 'gothic_24_bold': ['emoji-l'],
    'gothic_28': ['emoji-l'], 'gothic_28_bold': ['emoji-l'],
    'droid_serif_28_bold': ['emoji-l'],
    'bitham_18_light_subset': ['emoji-s'],
    'leco_28_light_numbers': ['emoji-l']
}

var fonts = {
    "gothic": [
        "09",
        "14",
        "14_bold",
        "18",
        "18_bold",
        "24",
        "24_bold",
        "28",
        "28_bold"
    ],
    "leco": [
        "20_bold_numbers",
        "26_bold_numbers_am_pm",
        "28_light_numbers",
        "32_bold_numbers",
        "36_bold_numbers",
        "38_bold_numbers",
        "42_numbers"
    ],
    "bitham": [
        "18_light_subset",
        "30_black",
        "34_medium_numbers",
        "34_light_subset",
        "42_bold",
        "42_light",
        "42_medium_numbers"
    ],
    "roboto": [
        "condensed_21",
        "bold_subset_49"
    ],
    "droid_serif": [
        "28_bold"
    ]
}
var screens = [
    "upper",
    "lower",
    "numbers",
    "special",
    "latin",
]

var listEl = document.querySelector('#main')
for (var family in fonts) {
    var familyEl = document.createElement('section')
    familyEl.setAttribute('data-family', family)
    var titleEl = document.createElement('h2')
    titleEl.innerText = family.replace(/_/, ' ')
    familyEl.appendChild(titleEl)
    for (var style in fonts[family]) {
        var styleEl = document.createElement('figure')
        styleEl.setAttribute('tab-order', '-1');
        styleEl.setAttribute('id', family + '_' + fonts[family][style]);
        styleEl.setAttribute('data-style', fonts[family][style])
        for (var screen in screens) {
            if (skip.indexOf(family + '_' + fonts[family][style] + '_' +
                screens[screen]) != -1)
                continue
            var imageWrapper = document.createElement('div')
            imageWrapper.classList.add('image-wrapper')
            var imageEl = document.createElement('img')
            imageEl.setAttribute('data-original',
                'screenshots/' + family + '_' + fonts[family][style] + '_' +
                    screens[screen] + '.png')
            imageWrapper.appendChild(imageEl)
            styleEl.appendChild(imageWrapper)
        }
        var metaEl = document.createElement('p')
        metaEl.classList.add('metadata')
        if (family + '_' + fonts[family][style] in flags) {
            metaEl.classList.add(flags[family + '_' + fonts[family][style]])
        }
        metaEl.innerHTML += '<span class="friendly">' +
                family.replace(/_/g, ' ') + ' ' +
                fonts[family][style].replace(/_/g, ' ') +
            '</span> <span class="technical">' +
                '<span class="invisible">FONT_KEY_</span>' +
                family.toUpperCase() + '_' +
                fonts[family][style].toUpperCase() +
            '</span>'
        styleEl.appendChild(metaEl)
        familyEl.appendChild(styleEl)
    }
    listEl.appendChild(familyEl)
}
