import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='orange_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share your best story!
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-6 w-full max-w-2xl flex flex-col gap-7 glassmorphism shadow-md'
      >
        <label>
          <span className='font-satoshi font-bold text-2xl text-white '>
            Your Story
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your story here'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-bold text-2xl text-white '>
            Story Tag{" "}
            <br/>
            <span className='font-normal text-sm text-gray-300'>
              Example: #life, #personal, #idea, etc...
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-200 text-xl font-bold'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-xl font-bold shadow-md bg-primary-orange rounded-full text-white hover:bg-white hover:text-orange-600'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
