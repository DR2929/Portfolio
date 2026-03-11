"use client";

import { useEffect, useState } from "react";

type GithubUser = {
  public_repos: number;
  followers: number;
  following: number;
};

type GithubStatsProps = {
  username?: string;
};

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-2xl">
      <p className="text-3xl font-semibold text-gray-50">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-gray-400">
        {label}
      </p>
    </div>
  );
}

export default function GithubStats({
  username = "DR2929"
}: GithubStatsProps) {
  const [data, setData] = useState<GithubUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) {
          throw new Error("Failed to fetch GitHub stats.");
        }
        const json = (await res.json()) as GithubUser;
        setData(json);
      } catch (e) {
        setError("Unable to load GitHub stats.");
      }
    }

    if (username && username !== "YOUR_GITHUB_USERNAME") {
      load();
    }
  }, [username]);

  if (username === "YOUR_GITHUB_USERNAME") {
    return (
      <p className="text-sm text-gray-400">
        Set your GitHub username in the `GithubStats` component to show live
        stats.
      </p>
    );
  }

  if (error) {
    return <p className="text-sm text-red-400">{error}</p>;
  }

  if (!data) {
    return <p className="text-sm text-gray-400">Loading GitHub stats...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      <Stat label="Repos" value={data.public_repos} />
      <Stat label="Followers" value={data.followers} />
      <Stat label="Following" value={data.following} />
    </div>
  );
}

