// Notes
// To compress and minify this, use uglify
// Example: uglifyjs input.js -o output.min.js -m -c (compressed version)
// Example: uglifyjs input.js -o output.min.js
// //wp-content/uploads/assets_2024/ --> live ur
new Vue({
    el: '#app',
    data: {
        arc_label_font_size: 18,
        preview_link: "",
        overall_average: 0,
        current_chart: 0,
        is_view_result: false,
        somatic_wealth_chart: null,
        mental_wealth_chart: null,
        emotional_wealth_chart: null,
        interpersonal_wealth_chart: null,
        energetic_wealth_chart: null,
        financial_wealth_chart: null,
        final_result_chart: null,
        somatic_wealth_question1: 0,
        somatic_wealth_question2: 0,
        somatic_wealth_question3: 0,
        somatic_wealth_question4: 0,
        somatic_wealth_question5: 0,
        mental_wealth_question1: 0,
        mental_wealth_question2: 0,
        mental_wealth_question3: 0,
        mental_wealth_question4: 0,
        mental_wealth_question5: 0,
        emotional_wealth_question1: 0,
        emotional_wealth_question2: 0,
        emotional_wealth_question3: 0,
        emotional_wealth_question4: 0,
        emotional_wealth_question5: 0,
        interpersonal_wealth_question1: 0,
        interpersonal_wealth_question2: 0,
        interpersonal_wealth_question3: 0,
        interpersonal_wealth_question4: 0,
        interpersonal_wealth_question5: 0,
        energetic_wealth_question1: 0,
        energetic_wealth_question2: 0,
        energetic_wealth_question3: 0,
        energetic_wealth_question4: 0,
        energetic_wealth_question5: 0,
        financial_wealth_question1: 0,
        financial_wealth_question2: 0,
        financial_wealth_question3: 0,
        financial_wealth_question4: 0,
        financial_wealth_question5: 0,
        somatic_wealth_progress: "0%",
        mental_wealth_progress: "0%",
        emotional_wealth_progress: "0%",
        energetic_wealth_progress: "0%",
        interpersonal_wealth_progress: "0%",
        energetic_wealth_progress: "0%",
        financial_wealth_progress: "0%",
        options: {
            slide_title: [
                "Somatic Wealth",
                "Mental Wealth",
                "Emotional Wealth",
                "Interpersonal Wealth",
                "Energetic Wealth",
                "Financial Wealth"
            ],
            questions: {
                somatic_wealth: [
                    "1. I can move my body with confidence, ease and freedom.",
                    "2. I am physically resilient and bounce back easily from periods of stress, illness, or injury.",
                    "3. I eat a balanced, nourishing diet and exercise regularly to maintain my health and joy.",
                    "4. I am connected with my body and I give it what it needs, when it needs it.",
                    "5. I am in flow with my environment and actively consider the impact and consequences of my choices."
                ],
                mental_wealth: [
                    "1. I think, understand, and process information easily and efficiently.",
                    "2. I am able to problem solve, think creatively, and learn new things.",
                    "3. I am present with my own thoughts, feelings, and behaviors.",
                    "4. I have an optimistic outlook and trust myself and others.",
                    "5. I am in full alignment with my needs, values, and desires."
                ],
                emotional_wealth: [
                    "1. I identify and manage my emotions responsibly for myself and in social situations.",
                    "2. I am able to deal with, and effectively recover from, adversity, disappointment and stress.",
                    "3. I feel and appropriately express a wide range of emotions.",
                    "4. Others would describe me as even-keeled and emotionally stable.",
                    "5. I recognize my value and see all of life’s events as opportunities for growth."
                ],
                interpersonal_wealth: [
                    "1. I recognise the impact that words and actions have on others and myself.",
                    "2. I have at least three people with whom I have an open, trusting and connected relationship.",
                    "3. I experience a sense of belonging in relationships with others.",
                    "4. My self-awareness informs my decisions and choices with others.",
                    "5. I am able to communicate and establish effective boundaries for myself and with others."
                ],
                energetic_wealth: [
                    "1. I am able to remain open, receptive, and at peace with what life brings.",
                    "2. I feel deeply connected with myself, others, and the greater world around me.",
                    "3. My purpose guides my decisions and how I show up every day.",
                    "4. My life is full of gratitude, pleasure, creativity and satisfaction.",
                    "5. I use my values to filter how I spend my time, resources and attention."
                ],
                financial_wealth: [
                    "1. I comfortably manage expenses and have no financial stress about handling the unexpected.",
                    "2. I am financially self-reliant without need of external income or employment.",
                    "3. I understand how money works and make empowered financial decisions for myself.",
                    "4. I have a regular practice of reviewing and managing my financial resources and investments.",
                    "5. My financial activities are in alignment with my life values and circumstances."
                ],
            },
            colors: {
                somatic_wealth: [
                    "#14594C","#437A70", "#729B94", "#A1BDB7", "#D0DEDB"
                ],
                mental_wealth: [
                    "#253671", "#515E8D", "#7C86AA", "#A8AFC6", "#D3D7E3"
                ],
                emotional_wealth: [
                    "#831220", "#9C414D", "#B57179", "#CDA0A6", "#E6D0D2"
                ],
                interpersonal_wealth: [
                    "#4F3080", "#725999", "#9583B3", "#B9ACCC", "#DCD6E6"
                ],
                energetic_wealth: [
                    "#D06C68", "#D98986", "#E3A7A4", "#ECC4C3", "#F6E2E1"
                ],
                financial_wealth: [
                    "#B0C39A", "#C0CFAE", "#D0DBC2", "#DFE7D7", "#EFF3EB"
                ]
            }
        },
        full_name: "",
        email_address: ""
    },
    created() {
        console.log("script created");
        const screen_width = document.documentElement.clientWidth;
        if(screen_width < 980) {
            this.arc_label_font_size = 12;
        }
    },
    watch: {
        current_chart($value) { console.log(`Current Chart: ${$value}`); },
        somatic_wealth_question1($value) { this.updateSomaticWealthData(); },
        somatic_wealth_question2($value) { this.updateSomaticWealthData(); },
        somatic_wealth_question3($value) { this.updateSomaticWealthData(); },
        somatic_wealth_question4($value) { this.updateSomaticWealthData(); },
        somatic_wealth_question5($value) { this.updateSomaticWealthData(); },

        mental_wealth_question1($value) { this.updateMentalWealthData(); },
        mental_wealth_question2($value) { this.updateMentalWealthData(); },
        mental_wealth_question3($value) { this.updateMentalWealthData(); },
        mental_wealth_question4($value) { this.updateMentalWealthData(); },
        mental_wealth_question5($value) { this.updateMentalWealthData(); },

        emotional_wealth_question1($value) { this.updateEmotionalWealthData(); },
        emotional_wealth_question2($value) { this.updateEmotionalWealthData(); },
        emotional_wealth_question3($value) { this.updateEmotionalWealthData(); },
        emotional_wealth_question4($value) { this.updateEmotionalWealthData(); },
        emotional_wealth_question5($value) { this.updateEmotionalWealthData(); },

        interpersonal_wealth_question1($value) { this.updateInterpersonalWealthData(); },
        interpersonal_wealth_question2($value) { this.updateInterpersonalWealthData(); },
        interpersonal_wealth_question3($value) { this.updateInterpersonalWealthData(); },
        interpersonal_wealth_question4($value) { this.updateInterpersonalWealthData(); },
        interpersonal_wealth_question5($value) { this.updateInterpersonalWealthData(); },

        energetic_wealth_question1($value) { this.updateEnergeticWealthData(); },
        energetic_wealth_question2($value) { this.updateEnergeticWealthData(); },
        energetic_wealth_question3($value) { this.updateEnergeticWealthData(); },
        energetic_wealth_question4($value) { this.updateEnergeticWealthData(); },
        energetic_wealth_question5($value) { this.updateEnergeticWealthData(); },

        financial_wealth_question1($value) { this.updateFinancialWealthData(); },
        financial_wealth_question2($value) { this.updateFinancialWealthData(); },
        financial_wealth_question3($value) { this.updateFinancialWealthData(); },
        financial_wealth_question4($value) { this.updateFinancialWealthData(); },
        financial_wealth_question5($value) { this.updateFinancialWealthData(); },
    },
    methods: {
        calculate_somatic_wealth_wheel() {
            const data = [
                parseInt(this.somatic_wealth_question1),
                parseInt(this.somatic_wealth_question2),
                parseInt(this.somatic_wealth_question3),
                parseInt(this.somatic_wealth_question4),
                parseInt(this.somatic_wealth_question5)
            ];
            const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            const average = sum / data.length;
            this.somatic_wealth_progress = `${average.toFixed()}%`;
        },
        calculate_mental_wealth_wheel() {
            const data = [
                parseInt(this.mental_wealth_question1),
                parseInt(this.mental_wealth_question2),
                parseInt(this.mental_wealth_question3),
                parseInt(this.mental_wealth_question4),
                parseInt(this.mental_wealth_question5)
            ];
            const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            const average = sum / data.length;
            this.mental_wealth_progress = `${average.toFixed()}%`;
        },
        calculate_emotional_wealth_wheel() {
            const data = [
                parseInt(this.emotional_wealth_question1),
                parseInt(this.emotional_wealth_question2),
                parseInt(this.emotional_wealth_question3),
                parseInt(this.emotional_wealth_question4),
                parseInt(this.emotional_wealth_question5)
            ];
            const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            const average = sum / data.length;
            this.emotional_wealth_progress = `${average.toFixed()}%`;
        },
        calculate_interpersonal_wealth_wheel() {
            const data = [
                parseInt(this.interpersonal_wealth_question1),
                parseInt(this.interpersonal_wealth_question2),
                parseInt(this.interpersonal_wealth_question3),
                parseInt(this.interpersonal_wealth_question4),
                parseInt(this.interpersonal_wealth_question5)
            ];
            const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            const average = sum / data.length;
            this.interpersonal_wealth_progress = `${average.toFixed()}%`;
        },
        calculate_energetic_wealth_wheel() {
            const data = [
                parseInt(this.energetic_wealth_question1),
                parseInt(this.energetic_wealth_question2),
                parseInt(this.energetic_wealth_question3),
                parseInt(this.energetic_wealth_question4),
                parseInt(this.energetic_wealth_question5)
            ];
            const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            const average = sum / data.length;
            this.energetic_wealth_progress = `${average.toFixed()}%`;
        },
        calculate_financial_wealth_wheel() {
            const data = [
                parseInt(this.financial_wealth_question1),
                parseInt(this.financial_wealth_question2),
                parseInt(this.financial_wealth_question3),
                parseInt(this.financial_wealth_question4),
                parseInt(this.financial_wealth_question5)
            ];
            const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            const average = sum / data.length;
            this.financial_wealth_progress = `${average.toFixed()}%`;
        },
        updateSomaticWealthData() {
            const $data = [
                this.somatic_wealth_question1,
                this.somatic_wealth_question2,
                this.somatic_wealth_question3,
                this.somatic_wealth_question4,
                this.somatic_wealth_question5
            ];
            this.somatic_wealth_chart.data.datasets[0].data = $data;
            this.somatic_wealth_chart.update();
            this.calculate_somatic_wealth_wheel();
        },
        updateMentalWealthData() {
            const $data = [
                this.mental_wealth_question1,
                this.mental_wealth_question2,
                this.mental_wealth_question3,
                this.mental_wealth_question4,
                this.mental_wealth_question5
            ];
            this.mental_wealth_chart.data.datasets[0].data = $data;
            this.mental_wealth_chart.update();  
            this.calculate_mental_wealth_wheel();
        },
        updateEmotionalWealthData() {
            const $data = [
                this.emotional_wealth_question1,
                this.emotional_wealth_question2,
                this.emotional_wealth_question3,
                this.emotional_wealth_question4,
                this.emotional_wealth_question5
            ];
            this.emotional_wealth_chart.data.datasets[0].data = $data;
            this.emotional_wealth_chart.update();
            this.calculate_emotional_wealth_wheel(); 
        },
        updateInterpersonalWealthData() {
            const $data = [
                this.interpersonal_wealth_question1,
                this.interpersonal_wealth_question2,
                this.interpersonal_wealth_question3,
                this.interpersonal_wealth_question4,
                this.interpersonal_wealth_question5
            ];
            this.interpersonal_wealth_chart.data.datasets[0].data = $data;
            this.interpersonal_wealth_chart.update();  
            this.calculate_interpersonal_wealth_wheel();
        },
        updateEnergeticWealthData() {
            const $data = [
                this.energetic_wealth_question1,
                this.energetic_wealth_question2,
                this.energetic_wealth_question3,
                this.energetic_wealth_question4,
                this.energetic_wealth_question5
            ];
            this.energetic_wealth_chart.data.datasets[0].data = $data;
            this.energetic_wealth_chart.update(); 
            this.calculate_energetic_wealth_wheel(); 
        },
        updateFinancialWealthData() {
            const $data = [
                this.financial_wealth_question1,
                this.financial_wealth_question2,
                this.financial_wealth_question3,
                this.financial_wealth_question4,
                this.financial_wealth_question5
            ];
            this.financial_wealth_chart.data.datasets[0].data = $data;
            this.financial_wealth_chart.update();  
            this.calculate_financial_wealth_wheel();
        },

        renderSomaticWealthWheel() {
            // Chart.js configuration
            const ctx = document.getElementById('somatic_wealth_chart').getContext('2d');
            const $data = [
                this.somatic_wealth_question1,
                this.somatic_wealth_question2,
                this.somatic_wealth_question3,
                this.somatic_wealth_question4,
                this.somatic_wealth_question5
            ]
            this.somatic_wealth_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: [
                        this.options.questions.somatic_wealth[0],
                        this.options.questions.somatic_wealth[1],
                        this.options.questions.somatic_wealth[2],
                        this.options.questions.somatic_wealth[3],
                        this.options.questions.somatic_wealth[4]
                    ],
                    datasets: [{
                        label: 'Somatic Wealth',
                        data: $data,
                        backgroundColor: [
                            this.options.colors.somatic_wealth[0],
                            this.options.colors.somatic_wealth[1],
                            this.options.colors.somatic_wealth[2],
                            this.options.colors.somatic_wealth[3],
                            this.options.colors.somatic_wealth[4]
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scale: {
                        ticks: {
                            display: false,
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    },
                    scales: {
                        r: {
                            ticks: {
                                display: false // Remove vertical numbers
                            }
                        }
                    }
                }
            });
        },
        renderMentalWealthWheel() {
            // Chart.js configuration
            const ctx = document.getElementById('mental_wealth_chart').getContext('2d');
            const $data = [
                this.mental_wealth_question1,
                this.mental_wealth_question2,
                this.mental_wealth_question3,
                this.mental_wealth_question4,
                this.mental_wealth_question5
            ]
            this.mental_wealth_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: [
                        this.options.questions.mental_wealth[0],
                        this.options.questions.mental_wealth[1],
                        this.options.questions.mental_wealth[2],
                        this.options.questions.mental_wealth[3],
                        this.options.questions.mental_wealth[4]
                    ],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            this.options.colors.mental_wealth[0],
                            this.options.colors.mental_wealth[1],
                            this.options.colors.mental_wealth[2],
                            this.options.colors.mental_wealth[3],
                            this.options.colors.mental_wealth[4]
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                        display: false
                        }
                    },
                    scale: {
                        ticks: {
                            display: false,
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    },
                    scales: {
                        r: {
                            ticks: {
                                display: false // Remove vertical numbers
                            }
                        }
                    }
                }
            });
        },
        renderEmotionalWealthWheel() {
            // Chart.js configuration
            const ctx = document.getElementById('emotional_wealth_chart').getContext('2d');
            const $data = [
                this.emotional_wealth_question1,
                this.emotional_wealth_question2,
                this.emotional_wealth_question3,
                this.emotional_wealth_question4,
                this.emotional_wealth_question5
            ]
            this.emotional_wealth_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: [
                        this.options.questions.emotional_wealth[0],
                        this.options.questions.emotional_wealth[1],
                        this.options.questions.emotional_wealth[2],
                        this.options.questions.emotional_wealth[3],
                        this.options.questions.emotional_wealth[4]
                    ],
                    datasets: [{
                        label: 'Emotional Wealth',
                        data: $data,
                        backgroundColor: [
                            this.options.colors.emotional_wealth[0],
                            this.options.colors.emotional_wealth[1],
                            this.options.colors.emotional_wealth[2],
                            this.options.colors.emotional_wealth[3],
                            this.options.colors.emotional_wealth[4]
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                        display: false
                        }
                    },
                    scale: {
                        ticks: {
                            display: false,
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    },
                    scales: {
                        r: {
                            ticks: {
                                display: false // Remove vertical numbers
                            }
                        }
                    }
                }
            });
        },
        renderInterpersonalWealthWheel() {
            // Chart.js configuration
            const ctx = document.getElementById('interpersonal_wealth_chart').getContext('2d');
            const $data = [
                this.interpersonal_wealth_question1,
                this.interpersonal_wealth_question2,
                this.interpersonal_wealth_question3,
                this.interpersonal_wealth_question4,
                this.interpersonal_wealth_question5
            ]
            this.interpersonal_wealth_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: [
                        this.options.questions.interpersonal_wealth[0],
                        this.options.questions.interpersonal_wealth[1],
                        this.options.questions.interpersonal_wealth[2],
                        this.options.questions.interpersonal_wealth[3],
                        this.options.questions.interpersonal_wealth[4]
                    ],
                    datasets: [{
                        label: 'Interpersonal Wealth',
                        data: $data,
                        backgroundColor: [
                            this.options.colors.interpersonal_wealth[0],
                            this.options.colors.interpersonal_wealth[1],
                            this.options.colors.interpersonal_wealth[2],
                            this.options.colors.interpersonal_wealth[3],
                            this.options.colors.interpersonal_wealth[4]
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                        display: false
                        }
                    },
                    scale: {
                        ticks: {
                            display: false,
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    },
                    scales: {
                        r: {
                            ticks: {
                                display: false // Remove vertical numbers
                            }
                        }
                    }
                }
            });
        },
        renderEnergeticWealthWheel() {
            // Chart.js configuration
            const ctx = document.getElementById('energetic_wealth_chart').getContext('2d');
            const $data = [
                this.energetic_wealth_question1,
                this.energetic_wealth_question2,
                this.energetic_wealth_question3,
                this.energetic_wealth_question4,
                this.energetic_wealth_question5
            ]
            this.energetic_wealth_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: [
                        this.options.questions.energetic_wealth[0],
                        this.options.questions.energetic_wealth[1],
                        this.options.questions.energetic_wealth[2],
                        this.options.questions.energetic_wealth[3],
                        this.options.questions.energetic_wealth[4]
                    ],
                    datasets: [{
                        label: 'Energetic Wealth',
                        data: $data,
                        backgroundColor: [
                            this.options.colors.energetic_wealth[0],
                            this.options.colors.energetic_wealth[1],
                            this.options.colors.energetic_wealth[2],
                            this.options.colors.energetic_wealth[3],
                            this.options.colors.energetic_wealth[4]
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                        display: false
                        }
                    },
                    scale: {
                        ticks: {
                            display: false,
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    },
                    scales: {
                        r: {
                            ticks: {
                                display: false // Remove vertical numbers
                            }
                        }
                    }
                }
            });
        },
        renderFinancialWealthWheel() {
            // Chart.js configuration
            const ctx = document.getElementById('financial_wealth_chart').getContext('2d');
            const $data = [
                this.financial_wealth_question1,
                this.financial_wealth_question2,
                this.financial_wealth_question3,
                this.financial_wealth_question4,
                this.financial_wealth_question5
            ]
            this.financial_wealth_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: [
                        this.options.questions.financial_wealth[0],
                        this.options.questions.financial_wealth[1],
                        this.options.questions.financial_wealth[2],
                        this.options.questions.financial_wealth[3],
                        this.options.questions.financial_wealth[4]
                    ],
                    datasets: [{
                        label: 'Financial Wealth',
                        data: $data,
                        backgroundColor: [
                            this.options.colors.financial_wealth[0],
                            this.options.colors.financial_wealth[1],
                            this.options.colors.financial_wealth[2],
                            this.options.colors.financial_wealth[3],
                            this.options.colors.financial_wealth[4]
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                        display: false
                        }
                    },
                    scale: {
                        ticks: {
                            display: false,
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    },
                    scales: {
                        r: {
                            ticks: {
                                display: false // Remove vertical numbers
                            }
                        }
                    }
                }
            });

            
        },
        calculateAverage() {
            const $s1 = parseInt(this.somatic_wealth_question1);
            const $s2 = parseInt(this.somatic_wealth_question2);
            const $s3 = parseInt(this.somatic_wealth_question3);
            const $s4 = parseInt(this.somatic_wealth_question4);
            const $s5 = parseInt(this.somatic_wealth_question5);
            const $m1 = parseInt(this.mental_wealth_question1);
            const $m2 = parseInt(this.mental_wealth_question2);
            const $m3 = parseInt(this.mental_wealth_question3);
            const $m4 = parseInt(this.mental_wealth_question4);
            const $m5 = parseInt(this.mental_wealth_question5);
            const $em1 = parseInt(this.emotional_wealth_question1);
            const $em2 = parseInt(this.emotional_wealth_question2);
            const $em3 = parseInt(this.emotional_wealth_question3);
            const $em4 = parseInt(this.emotional_wealth_question4);
            const $em5 = parseInt(this.emotional_wealth_question5);
            const $i1 = parseInt(this.interpersonal_wealth_question1);
            const $i2 = parseInt(this.interpersonal_wealth_question2);
            const $i3 = parseInt(this.interpersonal_wealth_question3);
            const $i4 = parseInt(this.interpersonal_wealth_question4);
            const $i5 = parseInt(this.interpersonal_wealth_question5);
            const $en1 = parseInt(this.energetic_wealth_question1);
            const $en2 = parseInt(this.energetic_wealth_question2);
            const $en3 = parseInt(this.energetic_wealth_question3);
            const $en4 = parseInt(this.energetic_wealth_question4);
            const $en5 = parseInt(this.energetic_wealth_question5);
            const $f1 = parseInt(this.financial_wealth_question1);
            const $f2 = parseInt(this.financial_wealth_question2);
            const $f3 = parseInt(this.financial_wealth_question3);
            const $f4 = parseInt(this.financial_wealth_question4);
            const $f5 = parseInt(this.financial_wealth_question5);

            const $average_somatic = parseFloat((($s1 + $s2 + $s3 + $s4 + $s5) / 5).toFixed());

            const $average_mental = parseFloat((($m1 + $m2 + $m3 + $m4 + $m5) / 5).toFixed());

            const $average_emotional = parseFloat((($em1 + $em2 + $em3 + $em4 + $em5) / 5).toFixed());

            const $average_interpersonal = parseFloat((($i1 + $i2 + $i3 + $i4 + $i5) / 5).toFixed());

            const $average_energetic = parseFloat((($en1 + $en2 + $en3 + $en4 + $en5) / 5).toFixed());

            const $average_financial = parseFloat((($f1 + $f2 + $f3 + $f4 + $f5) / 5).toFixed());

            this.overall_average = parseFloat((($average_somatic + $average_mental + $average_emotional + $average_interpersonal + $average_energetic + $average_financial) / 6).toFixed());

            const screen_width = document.documentElement.clientWidth;
            let $return_data = [];
            if(screen_width < 600) {
                $return_data = [
                    ['Somatic',`${$average_somatic}%`],
                    ['Mental',`${$average_mental}%`],
                    ['Emotional',`${$average_emotional}%`],
                    ['Interpersonal',`${$average_interpersonal}%`],
                    ['Energetic',`${$average_energetic}%`],
                    ['Financial',`${$average_financial}%`]
                ];
            } else {
                $return_data = [
                    ['Somatic Wealth',`${$average_somatic}%`],
                    ['Mental Wealth',`${$average_mental}%`],
                    ['Emotional Wealth',`${$average_emotional}%`],
                    ['Interpersonal Wealth',`${$average_interpersonal}%`],
                    ['Energetic Wealth',`${$average_energetic}%`],
                    ['Financial Wealth',`${$average_financial}%`]
                ];
            }

            return $return_data;
        },
        scrollToTop() {
            setTimeout(function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            },500)
        },
        renderFinalResult() {
            // Chart.js configuration
            // const ctx = document.getElementById('final_result_chart').getContext('2d');
        
            // const $data = [
            //     this.somatic_wealth_question1,
            //     this.somatic_wealth_question2,
            //     this.somatic_wealth_question3,
            //     this.somatic_wealth_question4,
            //     this.somatic_wealth_question5,
            //     this.mental_wealth_question1,
            //     this.mental_wealth_question2,
            //     this.mental_wealth_question3,
            //     this.mental_wealth_question4,
            //     this.mental_wealth_question5,
            //     this.emotional_wealth_question1,
            //     this.emotional_wealth_question2,
            //     this.emotional_wealth_question3,
            //     this.emotional_wealth_question4,
            //     this.emotional_wealth_question5,
            //     this.interpersonal_wealth_question1,
            //     this.interpersonal_wealth_question2,
            //     this.interpersonal_wealth_question3,
            //     this.interpersonal_wealth_question4,
            //     this.interpersonal_wealth_question5,
            //     this.energetic_wealth_question1,
            //     this.energetic_wealth_question2,
            //     this.energetic_wealth_question3,
            //     this.energetic_wealth_question4,
            //     this.energetic_wealth_question5,
            //     this.financial_wealth_question1,
            //     this.financial_wealth_question2,
            //     this.financial_wealth_question3,
            //     this.financial_wealth_question4,
            //     this.financial_wealth_question5,
            // ];

            this.preview_link = `https://livweal.com/assessment-result/?q1=${this.somatic_wealth_question1}&q2=${this.somatic_wealth_question2}&q3=${this.somatic_wealth_question3}&q4=${this.somatic_wealth_question4}&q5=${this.somatic_wealth_question5}&q6=${this.mental_wealth_question1}&q7=${this.mental_wealth_question2}&q8=${this.mental_wealth_question3}&q9=${this.mental_wealth_question4}&q10=${this.mental_wealth_question5}&q11=${this.emotional_wealth_question1}&q12=${this.emotional_wealth_question2}&q13=${this.emotional_wealth_question3}&q14=${this.emotional_wealth_question4}&q15=${this.emotional_wealth_question5}&q16=${this.interpersonal_wealth_question1}&q17=${this.interpersonal_wealth_question2}&q18=${this.interpersonal_wealth_question3}&q19=${this.interpersonal_wealth_question4}&q20=${this.interpersonal_wealth_question5}&q21=${this.energetic_wealth_question1}&q22=${this.energetic_wealth_question2}&q23=${this.energetic_wealth_question3}&q24=${this.energetic_wealth_question4}&q25=${this.energetic_wealth_question5}&q26=${this.financial_wealth_question1}&q27=${this.financial_wealth_question2}&q28=${this.financial_wealth_question3}&q29=${this.financial_wealth_question4}&q30=${this.financial_wealth_question5}`;
            
            // this.final_result_chart = new Chart(ctx, {
            //     type: 'polarArea',
            //     data: {
            //         labels: this.calculateAverage(),
            //         datasets: [{
            //             label: 'Living Wealthy Wheel',
            //             data: $data,
            //             backgroundColor: [
            //                 ...this.options.colors.somatic_wealth,
            //                 ...this.options.colors.mental_wealth,
            //                 ...this.options.colors.emotional_wealth,
            //                 ...this.options.colors.interpersonal_wealth,
            //                 ...this.options.colors.energetic_wealth,
            //                 ...this.options.colors.financial_wealth
            //             ],
            //             borderWidth: 1
            //         }]
            //     },
            //     options: {
            //         plugins: {
            //             legend: {
            //                 display: false
            //             }
            //         },
            //         scale: {
            //             ticks: {
            //                 display: false,
            //                 beginAtZero: true,
            //                 steps: 0,
            //                 stepValue: 5,
            //                 max: 100,
            //                 suggestedMax: 100,
            //                 suggestedMin: 0
            //             }
            //         },
            //         scales: {
            //             r: {
            //                 pointLabels: {
            //                     display: true,
            //                     centerPointLabels: true,
            //                     font: {
            //                         size: this.arc_label_font_size
            //                     },
            //                     arc: true,
            //                     position: 'outside'
            //                 },
            //                 ticks: {
            //                     display: false // Remove vertical numbers
            //                 }
            //             }
            //         }
            //     }
            // });
            
            this.current_chart++;
            document.getElementById('nav_buttons').style.display = 'none';
            
            this.scrollToTop();
        },
        beginTest() {
            this.current_chart++;
            this.manageVisibility();
            this.scrollToTop();
        },
        prevChart() {
            if(this.current_chart !== 1) {
                this.current_chart--;
                this.manageVisibility();
            }
            this.scrollToTop();
        },
        nextChart() {
            if(this.current_chart !== 6) {
                this.current_chart++;
                this.manageVisibility();
            }
            this.scrollToTop();
        },
        manageVisibility() {
            console.log(`managing visibility: ${this.current_chart}`);
        },
        submitResult() {
            console.log("submit result!");
            $('#mr-field-element-996842232134').click();
            
        }
    },
    mounted() {
        console.log("script mounted");
        this.renderSomaticWealthWheel();
        this.renderMentalWealthWheel();
        this.renderEmotionalWealthWheel();
        this.renderInterpersonalWealthWheel();
        this.renderEnergeticWealthWheel();
        this.renderFinancialWealthWheel();
    }
});


var rangeSlider = function(){
    var slider = $('.range-slider'),
    range = $('.range-slider__range'),
    value = $('.range-slider__value');
        
    slider.each(function() {

        value.each(function(){
        var value = $(this).prev().attr('value');
            $(this).html(value);
        });

        range.on('input', function(){
            $(this).next(value).html(`${this.value}%`);
        });
    });
};

rangeSlider();