export default function Response() {
  return (
    <div className="w-full px-6 border-b border-b-neutral-700 pb-4 mb-8">
        
      <div className="question flex align-items mb-6">
        <img className="w-12 h-12 rounded-full mr-4" src="/ai1.jpg" />
        <div>
          <h3 className="text-lg">You</h3>
          <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor ac tortor ac accumsan. Sed dictum arcu sed sollicitudin venenatis. Suspendisse maximus id nibh non imperdiet. In hac habitasse platea dictumst?</h3>
        </div>
      </div>
        
      <div className="response flex align-items mb-6">
        <img className="w-12 h-12 rounded-full mr-4" src="/ai1.jpg" />
        <div>
          <h3 className="text-lg">Mistral</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor ac tortor ac accumsan. Sed dictum arcu sed sollicitudin venenatis. Suspendisse maximus id nibh non imperdiet. In hac habitasse platea dictumst. Nullam euismod congue vulputate. Sed facilisis sapien at nulla condimentum vestibulum. Curabitur congue magna eget elementum accumsan. Sed metus justo, sodales a nulla non, consequat lobortis nibh. Cras magna arcu, egestas vestibulum sem quis, sollicitudin condimentum tortor. Etiam semper lacus sit amet tellus sagittis pretium. Sed quam purus, vestibulum sed leo a, sodales molestie neque. Suspendisse mattis metus ante, sit amet scelerisque purus commodo nec. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam dictum quis diam id porttitor. Mauris quam justo, dictum nec bibendum ut, blandit a enim.</p>
        </div>
      </div>

      <div className="text-gray-500 ml-16"> <a href="#">option 1</a>  |  <a href="#">option 2 </a> |  <a href="#">option 3 </a> |  <a href="#">option 4 </a></div>

    </div>
  );
}
