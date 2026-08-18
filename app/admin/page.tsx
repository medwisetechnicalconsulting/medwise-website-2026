'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FileText,
  Plus,
  Edit3,
  Trash2,
  Lock,
  LogOut,
  Search,
  CheckCircle2,
  AlertCircle,
  Globe,
  Settings as SettingsIcon,
  Briefcase,
  Eye,
  RefreshCw,
  ArrowLeft,
  Sparkles
} from 'lucide-react';

interface BlogPostMeta {
  slug: string;
  title: string;
  metaDescription: string;
  targetKeyword: string;
  date: string;
  author?: string;
  category?: string;
  image?: string;
  readTimeMinutes?: number;
  content?: string;
}

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  alt?: string;
}

interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  whatsappPhone: string;
  officeAddress: string;
  emergencyHotline: string;
}

export default function AdminDashboardPage() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<'blogs' | 'services' | 'settings'>('blogs');

  // Blogs State
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);
  const [loadingPosts, setLoadingPosts] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Blog Editor Modal State
  const [isBlogModalOpen, setIsBlogModalOpen] = useState<boolean>(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [blogFormData, setBlogFormData] = useState({
    title: '',
    slug: '',
    metaDescription: '',
    targetKeyword: '',
    category: 'Laboratory Diagnostics',
    author: 'Medwise Biomedical Advisory Team',
    image: '/images/blog-default.jpg',
    date: new Date().toISOString().split('T')[0],
    content: '',
  });
  const [previewMode, setPreviewMode] = useState<boolean>(false);
  const [savingBlog, setSavingBlog] = useState<boolean>(false);

  // Services State
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loadingServices, setLoadingServices] = useState<boolean>(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState<boolean>(false);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [serviceFormData, setServiceFormData] = useState({
    id: '',
    category: 'consulting',
    title: '',
    subtitle: '',
    description: '',
    featuresText: '',
    image: '/images/services/pre-purchase-consulting.png',
  });
  const [savingService, setSavingService] = useState<boolean>(false);

  // Settings State
  const [settings, setSettings] = useState<SiteSettings>({
    siteTitle: 'Medwise Technical Consulting',
    siteDescription: 'Independent Biomedical Engineering Advisory & Equipment Calibration in Kenya.',
    contactEmail: 'info@medwise.co.ke',
    contactPhone: '+254 700 000 000',
    whatsappPhone: '+254 700 000 000',
    officeAddress: 'Nairobi, Kenya',
    emergencyHotline: '+254 711 000 000',
  });
  const [loadingSettings, setLoadingSettings] = useState<boolean>(false);
  const [savingSettings, setSavingSettings] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Check auth session on mount
  useEffect(() => {
    const token = sessionStorage.getItem('medwise_admin_token');
    if (token) {
      setIsAuthenticated(true);
      fetchInitialData();
    }
  }, []);

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });

      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem('medwise_admin_token', data.token);
        setIsAuthenticated(true);
        fetchInitialData();
        showNotification('Authenticated successfully! Welcome Admin.');
      } else {
        setAuthError(data.error || 'Invalid admin passcode');
      }
    } catch {
      setAuthError('Error communicating with server');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('medwise_admin_token');
    setIsAuthenticated(false);
  };

  const fetchInitialData = async () => {
    fetchPosts();
    fetchServices();
    fetchSettings();
  };

  // --- BLOG MANAGERS ---
  const fetchPosts = async () => {
    setLoadingPosts(true);
    try {
      const res = await fetch('/api/admin/blogs');
      const data = await res.json();
      if (Array.isArray(data)) {
        setPosts(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingPosts(false);
    }
  };

  const handleOpenNewBlogModal = () => {
    setEditingSlug(null);
    setBlogFormData({
      title: '',
      slug: '',
      metaDescription: '',
      targetKeyword: '',
      category: 'Laboratory Diagnostics',
      author: 'Medwise Biomedical Advisory Team',
      image: '/images/blog-default.jpg',
      date: new Date().toISOString().split('T')[0],
      content: `## Executive Summary\n\nProvide an overview of the medical topic here...\n\n--- \n\n## Technical Details\n\nExplain engineering specifications, parameters, and clinical utility.`,
    });
    setPreviewMode(false);
    setIsBlogModalOpen(true);
  };

  const handleEditBlog = async (slug: string) => {
    setEditingSlug(slug);
    setPreviewMode(false);
    try {
      const res = await fetch(`/api/admin/blogs?slug=${slug}`);
      const data = await res.json();
      if (data && data.title) {
        setBlogFormData({
          title: data.title,
          slug: data.slug,
          metaDescription: data.metaDescription || '',
          targetKeyword: data.targetKeyword || '',
          category: data.category || 'Laboratory Diagnostics',
          author: data.author || 'Medwise Biomedical Advisory Team',
          image: data.image || '/images/blog-default.jpg',
          date: data.date || new Date().toISOString().split('T')[0],
          content: data.content || '',
        });
        setIsBlogModalOpen(true);
      }
    } catch (err) {
      console.error(err);
      showNotification('Failed to load blog post details');
    }
  };

  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingBlog(true);

    try {
      const isEditing = !!editingSlug;
      const method = isEditing ? 'PUT' : 'POST';
      const payload = {
        originalSlug: editingSlug,
        ...blogFormData,
      };

      const res = await fetch('/api/admin/blogs', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        showNotification(isEditing ? 'Blog post updated successfully!' : 'New blog post published!');
        setIsBlogModalOpen(false);
        fetchPosts();
      } else {
        alert(data.error || 'Failed to save blog post');
      }
    } catch (err) {
      console.error(err);
      alert('Error saving blog post');
    } finally {
      setSavingBlog(false);
    }
  };

  const handleDeleteBlog = async (slug: string, title: string) => {
    if (!confirm(`Are you sure you want to delete the blog post:\n\n"${title}"?\n\nThis cannot be undone.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/blogs?slug=${slug}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        showNotification(`Deleted "${title}" successfully`);
        fetchPosts();
      } else {
        alert(data.error || 'Failed to delete blog post');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting post');
    }
  };

  // --- SERVICES MANAGERS ---
  const fetchServices = async () => {
    setLoadingServices(true);
    try {
      const res = await fetch('/api/admin/services');
      const data = await res.json();
      if (Array.isArray(data)) {
        setServices(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingServices(false);
    }
  };

  const handleOpenNewServiceModal = () => {
    setEditingServiceId(null);
    setServiceFormData({
      id: '',
      category: 'consulting',
      title: '',
      subtitle: '',
      description: '',
      featuresText: 'Feature 1\nFeature 2\nFeature 3',
      image: '/images/services/pre-purchase-consulting.png',
    });
    setIsServiceModalOpen(true);
  };

  const handleEditService = (service: ServiceItem) => {
    setEditingServiceId(service.id);
    setServiceFormData({
      id: service.id,
      category: service.category || 'consulting',
      title: service.title,
      subtitle: service.subtitle || '',
      description: service.description,
      featuresText: (service.features || []).join('\n'),
      image: service.image || '/images/services/pre-purchase-consulting.png',
    });
    setIsServiceModalOpen(true);
  };

  const handleSaveService = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingService(true);

    try {
      const features = serviceFormData.featuresText
        .split('\n')
        .map((f) => f.trim())
        .filter(Boolean);

      const payload = {
        id: serviceFormData.id || serviceFormData.title.toLowerCase().replace(/\s+/g, '-'),
        category: serviceFormData.category,
        title: serviceFormData.title,
        subtitle: serviceFormData.subtitle,
        description: serviceFormData.description,
        features,
        image: serviceFormData.image,
      };

      const res = await fetch('/api/admin/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        showNotification('Service updated successfully!');
        setIsServiceModalOpen(false);
        fetchServices();
      } else {
        alert(data.error || 'Failed to save service');
      }
    } catch (err) {
      console.error(err);
      alert('Error saving service');
    } finally {
      setSavingService(false);
    }
  };

  const handleDeleteService = async (id: string, title: string) => {
    if (!confirm(`Delete service "${title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/services?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        showNotification(`Service "${title}" deleted`);
        fetchServices();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // --- SETTINGS MANAGERS ---
  const fetchSettings = async () => {
    setLoadingSettings(true);
    try {
      const res = await fetch('/api/admin/settings');
      const data = await res.json();
      if (data && data.siteTitle) {
        setSettings(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingSettings(false);
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingSettings(true);

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      const data = await res.json();
      if (data.success) {
        showNotification('Site settings updated successfully!');
      } else {
        alert(data.error || 'Failed to update settings');
      }
    } catch (err) {
      console.error(err);
      alert('Error updating settings');
    } finally {
      setSavingSettings(false);
    }
  };

  // Filtered posts
  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.targetKeyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.category && p.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // --- RENDER LOGIN IF UNAUTHENTICATED ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 text-white">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="mx-auto h-14 w-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Lock className="h-7 w-7" />
            </div>
            <h1 className="text-2xl font-extrabold text-white">Medwise Owner Portal</h1>
            <p className="text-xs text-slate-400 font-medium">
              Enter your passcode to manage website content, blogs, and settings.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Admin Passcode
              </label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode (default: medwise2026)"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm font-medium"
              />
            </div>

            {authError && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {authLoading ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <span>Unlock Admin Dashboard</span>
                  <Sparkles className="h-4 w-4 text-blue-200" />
                </>
              )}
            </button>
          </form>

          <div className="text-center pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Return to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER MAIN DASHBOARD ---
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-2xl shadow-2xl border border-blue-400 text-xs font-bold animate-bounce">
          <CheckCircle2 className="h-4 w-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Admin Header Bar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-black">
              M
            </div>
            <div>
              <h1 className="text-sm font-extrabold text-white">Medwise CMS Dashboard</h1>
              <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Content Manager
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-xl border border-slate-700 transition-colors"
            >
              <Globe className="h-3.5 w-3.5 text-blue-400" />
              <span>View Website</span>
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 px-3.5 py-2 rounded-xl border border-red-500/20 transition-colors cursor-pointer"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Quick Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Published Blogs</p>
              <p className="text-2xl font-black text-white mt-1">{posts.length}</p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <FileText className="h-6 w-6" />
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Core Services</p>
              <p className="text-2xl font-black text-white mt-1">{services.length}</p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Briefcase className="h-6 w-6" />
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">SEO Status</p>
              <p className="text-sm font-bold text-emerald-400 mt-1 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                Active Sitemap Auto-Sync
              </p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <SettingsIcon className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 space-x-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('blogs')}
            className={`py-3 px-5 border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'blogs'
                ? 'border-blue-500 text-blue-400 bg-blue-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>Blogs Manager ({posts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`py-3 px-5 border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'services'
                ? 'border-blue-500 text-blue-400 bg-blue-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="h-4 w-4" />
            <span>Services Manager ({services.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`py-3 px-5 border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'settings'
                ? 'border-blue-500 text-blue-400 bg-blue-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <SettingsIcon className="h-4 w-4" />
            <span>Site Settings & Info</span>
          </button>
        </div>

        {/* TAB 1: BLOGS MANAGER */}
        {activeTab === 'blogs' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search blogs by title or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={fetchPosts}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Refresh Posts"
                >
                  <RefreshCw className={`h-4 w-4 ${loadingPosts ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={handleOpenNewBlogModal}
                  className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  <span>Create New Blog Post</span>
                </button>
              </div>
            </div>

            {/* Posts Grid */}
            {loadingPosts ? (
              <div className="text-center py-12 text-slate-500 text-xs font-medium flex items-center justify-center gap-2">
                <RefreshCw className="h-4 w-4 animate-spin text-blue-400" />
                <span>Loading blogs from repository...</span>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-slate-900/50 border border-slate-800 rounded-2xl space-y-3">
                <FileText className="h-10 w-10 text-slate-600 mx-auto" />
                <p className="text-sm font-bold text-slate-300">No blog posts found</p>
                <p className="text-xs text-slate-500">Create your first blog post using the button above.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <div
                    key={post.slug}
                    className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all space-y-4 group p-5"
                  >
                    <div className="space-y-3">
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-slate-600 font-mono">
                            No Image Set
                          </div>
                        )}
                        <div className="absolute top-2 left-2">
                          <span className="bg-slate-950/80 backdrop-blur-md text-blue-400 text-[10px] px-2.5 py-0.5 rounded-md border border-slate-700 font-bold">
                            {post.category || 'General'}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Date: {post.date}</span>
                        <span>{post.readTimeMinutes} min read</span>
                      </div>

                      <h3 className="text-base font-extrabold text-white group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {post.metaDescription}
                      </p>

                      {post.targetKeyword && (
                        <div className="text-[11px] text-slate-500 font-mono">
                          Target Keyword: <span className="text-slate-300 font-semibold">{post.targetKeyword}</span>
                        </div>
                      )}
                    </div>


                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>View</span>
                      </Link>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditBlog(post.slug)}
                          className="p-2 rounded-lg bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 transition-colors cursor-pointer"
                          title="Edit Post"
                        >
                          <Edit3 className="h-3.5 w-3.5" />
                        </button>

                        <button
                          onClick={() => handleDeleteBlog(post.slug, post.title)}
                          className="p-2 rounded-lg bg-red-600/10 text-red-400 hover:bg-red-600/20 transition-colors cursor-pointer"
                          title="Delete Post"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SERVICES MANAGER */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-extrabold text-white">Manage Core Services</h2>
              <button
                onClick={handleOpenNewServiceModal}
                className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Plus className="h-4 w-4" />
                <span>Add New Service</span>
              </button>
            </div>

            {loadingServices ? (
              <div className="text-center py-12 text-slate-500 text-xs font-medium flex items-center justify-center gap-2">
                <RefreshCw className="h-4 w-4 animate-spin text-emerald-400" />
                <span>Loading services...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((svc) => (
                  <div
                    key={svc.id}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700 font-bold">
                        {svc.category}
                      </span>
                      <h3 className="text-base font-extrabold text-white">{svc.title}</h3>
                      <p className="text-xs text-emerald-400 font-bold">{svc.subtitle}</p>
                      <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{svc.description}</p>

                      <div className="pt-2 space-y-1">
                        <p className="text-[10px] uppercase font-bold text-slate-500">Key Features:</p>
                        <ul className="space-y-1">
                          {(svc.features || []).map((f, idx) => (
                            <li key={idx} className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                              <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEditService(svc)}
                        className="px-3 py-1.5 rounded-lg bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <Edit3 className="h-3.5 w-3.5" />
                        <span>Edit Service</span>
                      </button>
                      <button
                        onClick={() => handleDeleteService(svc.id, svc.title)}
                        className="p-1.5 rounded-lg bg-red-600/10 text-red-400 hover:bg-red-600/20 transition-colors cursor-pointer"
                        title="Delete Service"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: SITE SETTINGS */}
        {activeTab === 'settings' && (
          <form onSubmit={handleSaveSettings} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 max-w-3xl mx-auto">
            <div className="space-y-1 border-b border-slate-800 pb-4">
              <h2 className="text-lg font-extrabold text-white">Website Information & Contact Settings</h2>
              <p className="text-xs text-slate-400">
                Update global company contact details, phone numbers, and emergency lines.
              </p>
            </div>

            {loadingSettings ? (
              <div className="py-8 text-center text-slate-500 text-xs font-medium">Loading settings...</div>
            ) : (
              <div className="space-y-5 text-xs font-medium">
                <div>
                  <label className="block uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                    Website Main Title
                  </label>
                  <input
                    type="text"
                    value={settings.siteTitle}
                    onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                    Meta Description
                  </label>
                  <textarea
                    rows={3}
                    value={settings.siteDescription}
                    onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      value={settings.contactEmail}
                      onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                      Main Phone Number
                    </label>
                    <input
                      type="text"
                      value={settings.contactPhone}
                      onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                      WhatsApp Helpline Phone
                    </label>
                    <input
                      type="text"
                      value={settings.whatsappPhone}
                      onChange={(e) => setSettings({ ...settings, whatsappPhone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                      Emergency Service Hotline
                    </label>
                    <input
                      type="text"
                      value={settings.emergencyHotline}
                      onChange={(e) => setSettings({ ...settings, emergencyHotline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                    Physical Office Address
                  </label>
                  <input
                    type="text"
                    value={settings.officeAddress}
                    onChange={(e) => setSettings({ ...settings, officeAddress: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={savingSettings}
                    className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {savingSettings ? <RefreshCw className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
                    <span>Save Site Settings</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </main>

      {/* MODAL: BLOG POST EDITOR / CREATOR */}
      {isBlogModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900">
              <div>
                <h3 className="text-lg font-extrabold text-white">
                  {editingSlug ? `Edit Blog Post: ${blogFormData.title}` : 'Create New Blog Post'}
                </h3>
                <p className="text-xs text-slate-400">
                  Fill in metadata and markdown content. The post will be automatically saved as an MDX file and registered in the sitemap.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPreviewMode(!previewMode)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    previewMode
                      ? 'bg-blue-600 text-white border-blue-500'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  {previewMode ? 'Edit Mode' : 'Live Preview'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsBlogModalOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSaveBlog} className="flex-1 overflow-y-auto p-6 space-y-6 text-xs">
              {!previewMode ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Blog Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={blogFormData.title}
                        onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                        placeholder="e.g. Automated Hematology Analyzers in Kenya"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-400 uppercase tracking-wider mb-1">
                        URL Slug (leave blank to auto-generate)
                      </label>
                      <input
                        type="text"
                        value={blogFormData.slug}
                        onChange={(e) => setBlogFormData({ ...blogFormData, slug: e.target.value })}
                        placeholder="hematology-analyzer-guide-kenya"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium focus:outline-none focus:border-blue-500 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Meta Description (SEO snippet) *
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={blogFormData.metaDescription}
                      onChange={(e) => setBlogFormData({ ...blogFormData, metaDescription: e.target.value })}
                      placeholder="Brief overview summarizing the article for Google search results..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Target Keyword
                      </label>
                      <input
                        type="text"
                        value={blogFormData.targetKeyword}
                        onChange={(e) => setBlogFormData({ ...blogFormData, targetKeyword: e.target.value })}
                        placeholder="e.g. hematology analyzer Kenya"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Category
                      </label>
                      <select
                        value={blogFormData.category}
                        onChange={(e) => setBlogFormData({ ...blogFormData, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium focus:outline-none focus:border-blue-500"
                      >
                        <option value="Laboratory Diagnostics">Laboratory Diagnostics</option>
                        <option value="Calibration & QC">Calibration & QC</option>
                        <option value="Facility Planning">Facility Planning</option>
                        <option value="Imaging & Radiology">Imaging & Radiology</option>
                        <option value="Point-of-Care Testing">Point-of-Care Testing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Publish Date
                      </label>
                      <input
                        type="date"
                        value={blogFormData.date}
                        onChange={(e) => setBlogFormData({ ...blogFormData, date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Featured Cover Image URL *
                    </label>
                    <input
                      type="text"
                      required
                      value={blogFormData.image}
                      onChange={(e) => setBlogFormData({ ...blogFormData, image: e.target.value })}
                      placeholder="/images/blog/hematology-analyzer-guide.jpg"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono focus:outline-none focus:border-blue-500"
                    />
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] text-slate-500 font-bold uppercase">Quick Presets:</span>
                      {[
                        { label: 'Hematology', path: '/images/blog/hematology-analyzer-guide.png' },
                        { label: 'Chemistry POCT', path: '/images/blog/chemistry-analyzer-guide.jpg' },
                        { label: 'Biochem Guide', path: '/images/blog/biochemistry-buyers-guide-kenya.png' },
                        { label: 'Calibration', path: '/images/blog/biomedical-calibration-guide.jpg' },
                        { label: 'Clinic Setup', path: '/images/blog/clinic-setup-checklist.jpg' },
                        { label: 'X-Ray', path: '/images/blog/xray-selection-guide.jpg' },
                      ].map((preset) => (
                        <button
                          key={preset.path}
                          type="button"
                          onClick={() => setBlogFormData({ ...blogFormData, image: preset.path })}
                          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-blue-600 text-[10px] text-slate-300 hover:text-white font-mono border border-slate-700 transition-colors cursor-pointer"
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Markdown / MDX Content *
                    </label>
                    <textarea
                      rows={14}
                      required
                      value={blogFormData.content}
                      onChange={(e) => setBlogFormData({ ...blogFormData, content: e.target.value })}
                      placeholder="Write your article in Markdown/MDX formatting..."
                      className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs focus:outline-none focus:border-blue-500 leading-relaxed"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 prose prose-invert max-w-none prose-sm">

                  <h1 className="text-xl font-extrabold text-white mb-2">{blogFormData.title || 'Untitled Post'}</h1>
                  <p className="text-xs text-blue-400 font-semibold mb-4">{blogFormData.category} | By {blogFormData.author}</p>
                  <div className="whitespace-pre-wrap font-sans leading-relaxed text-slate-300">
                    {blogFormData.content}
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3 bg-slate-900 sticky bottom-0">
                <button
                  type="button"
                  onClick={() => setIsBlogModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingBlog}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {savingBlog ? <RefreshCw className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
                  <span>{editingSlug ? 'Update Blog Post' : 'Publish Blog Post'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: SERVICE EDITOR / CREATOR */}
      {isServiceModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-base font-extrabold text-white">
                {editingServiceId ? 'Edit Service' : 'Add New Service'}
              </h3>
              <button onClick={() => setIsServiceModalOpen(false)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveService} className="p-6 space-y-4 text-xs font-medium">
              <div>
                <label className="block text-slate-400 font-bold uppercase mb-1">Service Title *</label>
                <input
                  type="text"
                  required
                  value={serviceFormData.title}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, title: e.target.value })}
                  placeholder="Pre-Purchase Consulting"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-bold uppercase mb-1">Subtitle</label>
                <input
                  type="text"
                  value={serviceFormData.subtitle}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, subtitle: e.target.value })}
                  placeholder="Making Informed Technical Decisions"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-bold uppercase mb-1">Description *</label>
                <textarea
                  rows={3}
                  required
                  value={serviceFormData.description}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-bold uppercase mb-1">Key Features (One per line)</label>
                <textarea
                  rows={4}
                  value={serviceFormData.featuresText}
                  onChange={(e) => setServiceFormData({ ...serviceFormData, featuresText: e.target.value })}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsServiceModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingService}
                  className="px-6 py-2 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-500"
                >
                  {savingService ? 'Saving...' : 'Save Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
