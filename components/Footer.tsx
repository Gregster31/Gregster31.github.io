import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
  stargazers_count: number;
  forks_count: number;
}

const Footer = async (): Promise<JSX.Element> => {
  let stargazers_count = 0;
  let forks_count = 0;

  try {
    const res = await fetch(
      'https://api.github.com/repos/Gregster31/Gregster31.github.io',
      {
        next: {
          revalidate: 3600, // 1 hour
        },
      }
    );

    if (res.ok) {
      const data: RepoStats = await res.json();
      stargazers_count = data.stargazers_count;
      forks_count = data.forks_count;
    } else {
      console.log('GitHub API returned non-ok status');
    }
  } catch (error) {
    console.log('Could not fetch repo stats', error);
  }

  return (
    <footer className="text-center pt-20 pb-10" id="contact">
    <div className="container max-w-4xl mx-auto px-4">
        <p className="text-lg mb-6">Have a blockchain project in mind?</p>

        <a
        href={`mailto:${GENERAL_INFO.email}`}
        className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
        >
        {GENERAL_INFO.email}
        </a>

        <div className="leading-none text-muted-foreground">
        Built by Julien Halde
        {(stargazers_count > 0 || forks_count > 0) && (
            <div className="flex items-center justify-center gap-5 pt-2">
            <span className="flex items-center gap-2">
                <Star size={18} /> {stargazers_count}
            </span>
            <span className="flex items-center gap-2">
                <GitFork size={18} /> {forks_count}
            </span>
            </div>
        )}
        </div>
    </div>
    </footer>

  );
};

export default Footer;
