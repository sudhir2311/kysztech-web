$(function() {

    Highcharts.setOptions({
        lang: {
            drillUpText: 'Back'
        }
    });

    // Create the chart
    $('#container_chart').highcharts({
        chart: {
            type: 'column',
            backgroundColor: null
        },
        title: {
            text: 'We completed projects in below technologies.',
            style: {

                color: '#FFF'
            }
        },
        subtitle: {
            text: 'Click the columns to view detail.',
            style: {

                color: '#FFF'
            }
        },
        xAxis: {
            type: 'category',
            labels: {

                style: {
                    color: '#FFF'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Total no of projects done',
                style: {
                    color: '#FFF'
                }
            },
            labels: {
                style: {
                    color: '#FFF'
                }
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    color: '#FFF'

                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> Projects completed.<br/>'
        },

        series: [{
            name: 'Technology',
            colorByPoint: true,
            data: [{
                name: 'Java',
                y: 15,
                color: '#ff9811',
                drilldown: 'Java'
            }, {
                name: 'IOS',
                y: 25,
                color: '#45a8da',
                drilldown: 'IOS'
            }, {
                name: 'Android',
                y: 17,
                color: '#91dc5a',
                drilldown: 'Android'
            }, {
                name: 'Magento',
                y: 11,
                color: '#f05916',
                drilldown: 'Magento'
            }, {
                name: 'Php',
                y: 8,
                color: '#c4c4c4',
                drilldown: 'Php'
            }]
        }],
        drilldown: {
            activeAxisLabelStyle: {
                cursor: 'pointer',
                color: '#FFF',
                fontWeight: 'bold',
                textDecoration: 'none'
            },
            activeDataLabelStyle: {
                color: '#FFF',
                fontWeight: 'bold',
                textDecoration: 'none'
            },
            drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    y: 0,
                    x: 0
                },
                theme: {
                    fill: '#8cc34b',
                    'stroke-width': 1,
                    stroke: 'silver',
                    r: 0,
                    states: {
                        hover: {
                            fill: '#8cc34b'
                        },
                        select: {
                            stroke: '#039',
                            fill: '#8cc34b'
                        }
                    }
                }
            },
            series: [{
                name: 'Java',
                id: 'Java',
                data: [
                    [
                        'Spring(-boot)',
                        6
                    ],
                    [
                        'Hibernate',
                        6
                    ],
                    [
                        'MongoDB',
                        3
                    ],
                    [
                        'JMS<br/>(Active/Rabbit)',
                        1
                    ],
                    [
                        'GIS',
                        2
                    ],
                    [
                        'v7.0',
                        0.5
                    ]
                ]
            }, {
                name: 'IOS',
                id: 'IOS',
                data: [
                    [
                        'IOS',
                        25
                    ],
                    [
                        'iPhone',
                        25
                    ],
                    [
                        'iPad',
                        25
                    ],
                    [
                        'Universal Application',
                        10
                    ],
                    [
                        'Objective C',
                        25
                    ],
                    [
                        'Swift',
                        4
                    ],
                    [
                        'Watch OS',
                        2
                    ]
                ]
            }, {
                name: 'Android',
                id: 'Android',
                data: [
                    [
                        'Android Studio',
                        17
                    ],
                    [
                        'Material Design',
                        14
                    ],
                    [
                        'Maps',
                        6
                    ],
                    [
                        'Widget',
                        3
                    ],
                    [
                        'Zxing',
                        4
                    ],
                    [
                        'Api',
                        13
                    ],
                    [
                        'Media Framework',
                        4
                    ]
                ]
            }, {
                name: 'Magento',
                id: 'Magento',
                data: [
                    [
                        'Magento 1.x',
                        9
                    ],
                    [
                        'Magento 2',
                        2
                    ],
                    [
                        'OXID',
                        4
                    ],
                    [
                        'CI (Code Ignotor)',
                        3
                    ],
                    [
                        'ZEND',
                        2
                    ]
                ]
            }, {
                name: 'Php',
                id: 'Php',
                data: [
                    [
                        'Php',
                        8
                    ],
                    [
                        'WordPress',
                        7
                    ],
                    [
                        'Angular JS',
                        3
                    ],
                    [
                        'JQuery',
                        7
                    ]
                ]
            }]
        }
    });
});