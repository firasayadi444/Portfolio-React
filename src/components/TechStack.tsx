
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';

const TechStack = () => {
  const techCategories = [
    {
      id: 'languages',
      name: 'Languages',
      items: [
        { name: 'Python', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'Java', level: 'Intermediate' },
        { name: 'C/C++', level: 'Intermediate' },
        { name: 'Bash', level: 'Advanced' },
      ]
    },
    {
      id: 'web',
      name: 'Web Technologies',
      items: [
        { name: 'React', level: 'Advanced' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express', level: 'Intermediate' },
        { name: 'HTML/CSS', level: 'Advanced' },
        { name: 'REST APIs', level: 'Advanced' },
        { name: 'GraphQL', level: 'Intermediate' },
        { name: 'Tailwind CSS', level: 'Advanced' },
      ]
    },
    {
      id: 'devops',
      name: 'DevOps & CI/CD',
      items: [
        { name: 'Docker', level: 'Advanced' },
        { name: 'Kubernetes', level: 'Advanced' },
        { name: 'Jenkins', level: 'Advanced' },
        { name: 'GitHub Actions', level: 'Advanced' },
        { name: 'ArgoCD', level: 'Intermediate' },
        { name: 'GitLab CI', level: 'Intermediate' },
        { name: 'CircleCI', level: 'Intermediate' },
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      items: [
        { name: 'AWS', level: 'Advanced' },
        { name: 'Google Cloud', level: 'Intermediate' },
        { name: 'Azure', level: 'Intermediate' },
        { name: 'Terraform', level: 'Advanced' },
        { name: 'CloudFormation', level: 'Intermediate' },
        { name: 'Serverless', level: 'Advanced' },
        { name: 'AWS CDK', level: 'Intermediate' },
      ]
    },
    {
      id: 'security',
      name: 'Security',
      items: [
        { name: 'Keycloak', level: 'Advanced' },
        { name: 'HashiCorp Vault', level: 'Advanced' },
        { name: 'Trivy', level: 'Advanced' },
        { name: 'OWASP', level: 'Intermediate' },
        { name: 'JWT Auth', level: 'Advanced' },
        { name: 'OAuth/OIDC', level: 'Advanced' },
        { name: 'Zero Trust Architecture', level: 'Advanced' },
      ]
    },
    {
      id: 'databases',
      name: 'Databases',
      items: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'Redis', level: 'Intermediate' },
        { name: 'DynamoDB', level: 'Intermediate' },
        { name: 'MySQL', level: 'Intermediate' },
        { name: 'ElasticSearch', level: 'Beginner' },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      case 'Beginner':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
    }
  };

  return (
    <section id="tech-stack" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Tech Stack</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
          The technologies, languages and tools I work with.
        </p>
        
        <Card className="animate-fade-in">
          <CardContent className="p-6">
            <Tabs defaultValue="languages">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-6">
                {techCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {techCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {category.items.map((item) => (
                      <div 
                        key={item.name}
                        className="flex justify-between items-center p-3 rounded-lg border border-border"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(item.level)}`}>
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechStack;
