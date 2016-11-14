/* localStorage.setItem('Item1', JSON.stringify({
    preke: 'Hiacintas',
    aprasymas: 'Hiacintai – tai tikras pavasario simbolis!',
    kaina: '1.88',
    foto: 'img/hiacintas.jpg'
}));

localStorage.setItem('Item2', JSON.stringify({
    preke: 'Kardelis',
    aprasymas: 'Ivairių spalvų gėlės.',
    kaina: '0.49',
    foto: 'img/kardelis.jpg'
}));

localStorage.setItem('Item3', JSON.stringify({
    preke: 'Orchidėja',
    aprasymas: 'Orchidėja su 1  svyrančiu žiedynu pasodinta 12 cm permatomame vazonėlyje.',
    kaina: '14.99',
    foto: 'img/orchideja.jpg'
}));

localStorage.setItem('Item4', JSON.stringify({
    preke: 'Ramunių puokštė',
    aprasymas: 'Lauko gėlės – tai žvalumo, gyvybingumo simbolis. ',
    kaina: '24.62',
    foto: 'img/ramune.jpg'
})); */


var items = [   {'Item1' : 
                { preke : 'Hiacintas',
                aprasymas: 'Hiacintai – tai tikras pavasario simbolis!',
                kaina: '1.88',
                foto: 'img/hiacintas.jpg'}
            },
            {'Item2' :
                { preke: 'Kardelis',
                aprasymas: 'Ivairių spalvų gėlės.',
                kaina: '0.49',
                foto: 'img/kardelis.jpg'}},
            {'Item3' :
                { preke: 'Orchidėja',
                aprasymas: 'Orchidėja su 1  svyrančiu žiedynu pasodinta 12 cm permatomame vazonėlyje.',
                kaina: '14.99',
                foto: 'img/orchideja.jpg'}},
            {'Item4' :
                { preke: 'Ramunių puokštė',
                aprasymas: 'Lauko gėlės – tai žvalumo, gyvybingumo simbolis. ',
                kaina: '24.62',
                foto: 'img/ramune.jpg'}}
            ];

localStorage.setItem('items', JSON.stringify(items));


var newItem = {'Item6' :
    { preke: 'Ramunių puokštė',
    aprasymas: 'Lauko gėlės – tai žvalumo, gyvybingumo simbolis. ',
    kaina: '24.62',
    foto: 'img/ramune.jpg'}}

 items.push(newItem);  