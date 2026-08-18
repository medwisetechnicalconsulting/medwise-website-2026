import { NextResponse } from 'next/server';
import { getAllPosts, getPostBySlug, savePost, deletePost } from '@/lib/mdx';

// GET all blog posts or single blog post by slug query parameter
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      const post = getPostBySlug(slug);
      if (!post) {
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
      }
      return NextResponse.json(post);
    }

    const posts = getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('API Blog GET Error:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

// POST create new blog post
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, slug, metaDescription, targetKeyword, author, category, image, date, content } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const targetSlug = slug || title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    const savedPost = savePost(
      targetSlug,
      {
        title,
        metaDescription,
        targetKeyword,
        author: author || 'Medwise Biomedical Advisory Team',
        category: category || 'Laboratory Diagnostics',
        image: image || '/images/blog-default.jpg',
        date: date || new Date().toISOString().split('T')[0],
      },
      content
    );

    if (!savedPost) {
      return NextResponse.json({ error: 'Failed to save blog post' }, { status: 500 });
    }

    return NextResponse.json({ success: true, post: savedPost }, { status: 201 });
  } catch (error) {
    console.error('API Blog POST Error:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}

// PUT update existing blog post
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { originalSlug, title, slug, metaDescription, targetKeyword, author, category, image, date, content } = body;

    const targetSlug = slug || originalSlug;
    if (!targetSlug || !title || !content) {
      return NextResponse.json({ error: 'Slug, title, and content are required' }, { status: 400 });
    }

    // If slug changed, delete original file
    if (originalSlug && originalSlug !== targetSlug) {
      deletePost(originalSlug);
    }

    const updatedPost = savePost(
      targetSlug,
      {
        title,
        metaDescription,
        targetKeyword,
        author,
        category,
        image,
        date,
      },
      content
    );

    if (!updatedPost) {
      return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
    }

    return NextResponse.json({ success: true, post: updatedPost });
  } catch (error) {
    console.error('API Blog PUT Error:', error);
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

// DELETE delete blog post
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required for deletion' }, { status: 400 });
    }

    const deleted = deletePost(slug);
    if (!deleted) {
      return NextResponse.json({ error: 'Blog post not found or could not be deleted' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: `Blog post ${slug} deleted successfully` });
  } catch (error) {
    console.error('API Blog DELETE Error:', error);
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
}
