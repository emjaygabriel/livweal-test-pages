new Vue({
    el: '#app',
    data: {
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
    watch: {
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
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
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
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
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
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
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
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
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
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
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
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
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
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    }
                }
            });

            
        },
        renderFinalResult() {
            // Chart.js configuration
            const ctx = document.getElementById('final_result_chart').getContext('2d');
            const $data = [
                this.somatic_wealth_question1,
                this.somatic_wealth_question2,
                this.somatic_wealth_question3,
                this.somatic_wealth_question4,
                this.somatic_wealth_question5,
                this.mental_wealth_question1,
                this.mental_wealth_question2,
                this.mental_wealth_question3,
                this.mental_wealth_question4,
                this.mental_wealth_question5,
                this.emotional_wealth_question1,
                this.emotional_wealth_question2,
                this.emotional_wealth_question3,
                this.emotional_wealth_question4,
                this.emotional_wealth_question5,
                this.interpersonal_wealth_question1,
                this.interpersonal_wealth_question2,
                this.interpersonal_wealth_question3,
                this.interpersonal_wealth_question4,
                this.interpersonal_wealth_question5,
                this.energetic_wealth_question1,
                this.energetic_wealth_question2,
                this.energetic_wealth_question3,
                this.energetic_wealth_question4,
                this.energetic_wealth_question5,
                this.financial_wealth_question1,
                this.financial_wealth_question2,
                this.financial_wealth_question3,
                this.financial_wealth_question4,
                this.financial_wealth_question5,
            ]
            this.final_result_chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
                    datasets: [{
                        label: 'Sample Data Only',
                        data: $data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 255, 0, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            steps: 0,
                            stepValue: 5,
                            max: 100,
                            suggestedMax: 100,
                            suggestedMin: 0
                        }
                    }
                }
            });

            $('#financial_wealth_slide').css('display', 'none');
            $('#final_result_slide').css('display','block');
            $('#nav_buttons').css('display', 'none');
            // this.is_view_result = true;
        },
        prevChart() {
            if(this.current_chart !== 0) {
                this.current_chart--;
                this.manageVisibility();
            }
        },
        nextChart() {
            if(this.current_chart !== 5) {
                this.current_chart++;
                this.manageVisibility();
            }
        },
        manageVisibility() {
            $('#somatic_wealth_slide').css('display', 'none');
            $('#mental_wealth_slide').css('display', 'none');
            $('#emotional_wealth_slide').css('display', 'none');
            $('#interpersonal_wealth_slide').css('display', 'none');
            $('#energetic_wealth_slide').css('display', 'none');
            $('#financial_wealth_slide').css('display', 'none');
            
            switch(this.current_chart) {
                case 0: 
                    $('#somatic_wealth_slide').css('display', 'block'); break;
                case 1:
                    $('#mental_wealth_slide').css('display', 'block'); break;
                case 2:
                    $('#emotional_wealth_slide').css('display', 'block'); break;
                case 3:
                    $('#interpersonal_wealth_slide').css('display', 'block'); break;
                case 4:
                    $('#energetic_wealth_slide').css('display', 'block'); break;
                case 5:
                    $('#financial_wealth_slide').css('display', 'block'); break;
            }
        }
    },
    mounted() {
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