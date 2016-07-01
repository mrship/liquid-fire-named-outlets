export default function(){
  this.transition(
    this.fromRoute('parent.index'),
    this.toRoute('parent.named'),
    this.outletName('named'),
    this.use('toLeft', {duration: 500}),
    this.reverse('toRight', {duration: 500}),
    this.debug()
  );

  this.transition(
    this.fromRoute('parent.index'),
    this.toRoute('parent.main'),
    this.outletName('main'),
    this.use('toLeft', {duration: 500}),
    this.reverse('toRight', {duration: 500}),
    this.debug()
  );
}
