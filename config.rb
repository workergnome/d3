###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
page "/examples/**/*.html", layout: :code

# General configuration

set :build_dir, 'docs'

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers do
  def examples
    sitemap.resources.find_all{|r| r.path.include?("examples/") && r.path.include?("html")}.sort_by{|r| r.metadata[:page][:order] || 0}
  end

  def generate_data(type, filename="data")
    "#{hostname}#{current_page.url.split("/")[0..-2].join("/")}/#{filename}.#{type.to_s}"
  end
 
  def hostname
    development? ? "http://localhost:4567"  : "http://d3.workergnome.com"
  end
  
  def init_code
    File.read("./source/globals/init.js").gsub("\n",'\n').gsub('"', '\"');
  end

  def example_link(resource)
    link_to resource.metadata[:page][:title], resource.path
  end

  def next_example
    nextVal = examples.index(current_resource) + 1
    if examples[nextVal]
      link_to "Next", examples[nextVal].path, class: "button"
    else
      link_to "Next", nil, class: "button disabled"
    end
  end
  
  def prev_example
    nextVal = examples.index(current_resource)
    if nextVal > 0 
      link_to "Prev", examples[nextVal-1].path, class: "button"
    else
      link_to "Prev", nil, class: "button disabled"
    end
  end

end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end
