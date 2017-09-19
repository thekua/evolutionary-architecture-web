require 'rake'
require 'tmpdir'
require 'rake/clean'

HOME = "#{File.dirname(__FILE__)}"

BOOK = "#{HOME}"
BUILD_OUT = "/Users/nford/Downloads/out.html"
ADOC_PROC = "/Users/nford/.rvm/gems/ruby-1.9.3-head/bin/asciidoctor"  

# Which files should be deleted during clean or clobber tasks
#CLEAN.include("#{DEST}/**/*.html")

# A method to create a shorter name for a task
def alias_task name, old_name
  t = Rake::Task[old_name]
  desc t.full_comment if t.full_comment
  task name, *t.arg_names do |_, args|
    # values_at is broken on Rake::TaskArguments
    args = t.arg_names.map { |a| args[a] }
    t.invoke(args)
  end
end

task :default => [:status]

task :commit_push => [:pull] do
  puts "Commit comment? (default will be 'updates on #{Time.now}')"
  print " => "
  comment = $stdin.gets.chomp
  commit_message = if comment.empty?
    "updates on #{Time.now}"
  else
    "#{comment}"
  end
  sh "gitwc >> writing.log"
  sh "git commit -a -m'#{commit_message}'"
  sh "git push"
end
alias_task :cp, :commit_push
alias_task :copu, :commit_push

task :pull do
  sh("git pull")
end
alias_task :ll, :pull
alias_task :up, :pull

task :status => [:pull] do
  sh("git status")
end
alias_task :st, :status

task :publish => [:pull] do
  sh "git checkout gh-pages"
  sh "git rebase master"
  sh "git push origin gh-pages"
  sh "git checkout master"
end


desc "Finds missing image files"
desc "Prints in the format:"
desc "file_name:"
desc "\t missing_image"
desc "asciidoc format for images: image::images/fig_service_choreography.jpg[]"
task :missing => [] do
  regex_for_asciidoc_images = /^image\:\:images\/(.*)\[\]/
  image_filenames = (FileList["#{HOME}/images/*.png"] +
            FileList["#{HOME}/images/*.jpg"]).collect { |f| File.basename(f) }
  book_contents = FileList["#{HOME}/ch*.asciidoc"]
  book_contents.each do |file|
    filename_has_been_output = false
    IO.foreach(file) do |line|
      if line =~ regex_for_asciidoc_images
        image_file_name = $1
        unless image_filenames.include? image_file_name 
          unless filename_has_been_output 
            puts File.basename(file, '.asciidoc') + ':'
            filename_has_been_output = true
          end
          puts "\t" + image_file_name
        end
      end
    end
  end
end

